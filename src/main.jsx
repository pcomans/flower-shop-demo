import React from 'react';
import { createRoot } from 'react-dom/client';

// Order matters: library base styles first, then brand token overrides,
// then our app layout.
import 'react-material-expressive/styles.css';
import './theme.css';
import './App.css';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
