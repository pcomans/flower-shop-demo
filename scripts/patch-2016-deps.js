// Keeps the 2016 toolchain running on modern Node. Run automatically via postinstall.
var fs = require('fs');
var path = require('path');

var rsModules = path.join(__dirname, '..', 'node_modules', 'react-scripts', 'node_modules');

// 1. The bundled websocket-driver 0.6.5 calls process.binding('http_parser'),
//    which modern Node removed. Swap in 0.7.4 (same API, pure-JS parser).
var src = path.join(__dirname, '..', 'node_modules', 'websocket-driver');
var dest = path.join(rsModules, 'websocket-driver');
if (fs.existsSync(src) && fs.existsSync(dest)) {
  var srcVersion = require(path.join(src, 'package.json')).version;
  var destVersion = require(path.join(dest, 'package.json')).version;
  if (srcVersion !== destVersion) {
    fs.rmSync(dest, { recursive: true, force: true });
    fs.cpSync(src, dest, { recursive: true });
    console.log('patched: websocket-driver ' + destVersion + ' -> ' + srcVersion);
  }
}

// 2. The bundled send 0.14 reads res._headers, which modern Node removed.
//    Rewrite those reads to use res.getHeaders() when available.
var sendIndex = path.join(rsModules, 'send', 'index.js');
if (fs.existsSync(sendIndex)) {
  var code = fs.readFileSync(sendIndex, 'utf8');
  if (code.indexOf('getHeaders') === -1) {
    code = code
      .replace(/this\.res\._headers/g, '(this.res.getHeaders ? this.res.getHeaders() : this.res._headers)')
      .replace(/res\._headers \|\| \{\}/g, '(res.getHeaders ? res.getHeaders() : res._headers) || {}');
    fs.writeFileSync(sendIndex, code);
    console.log('patched: send res._headers -> res.getHeaders()');
  }
}
