import React from 'react';

// A little hand-drawn SVG stand-in for real product photography.
// (The photographer is coming next Tuesday.)

function Flower(props) {
  var petals = [];
  for (var i = 0; i < 6; i++) {
    petals.push(
      <ellipse
        key={i}
        cx="0"
        cy="-11"
        rx="6"
        ry="11"
        fill={props.color}
        transform={'rotate(' + i * 60 + ')'}
      />
    );
  }
  return (
    <g transform={'translate(' + props.x + ',' + props.y + ') scale(' + (props.scale || 1) + ')'}>
      {petals}
      <circle cx="0" cy="0" r="6" fill="#FBC02D" />
    </g>
  );
}

function BouquetArt(props) {
  var colors = props.petals;
  return (
    <svg viewBox="0 0 200 150" className="bouquet-art" role="img" aria-label={props.name}>
      <rect width="200" height="150" fill="#F7F2ED" />
      <g stroke="#7CB342" strokeWidth="3" fill="none">
        <line x1="100" y1="130" x2="70" y2="55" />
        <line x1="100" y1="130" x2="100" y2="45" />
        <line x1="100" y1="130" x2="130" y2="55" />
        <line x1="100" y1="130" x2="52" y2="80" />
        <line x1="100" y1="130" x2="148" y2="80" />
      </g>
      <Flower x={52} y={78} color={colors[1]} scale={0.8} />
      <Flower x={148} y={78} color={colors[2]} scale={0.8} />
      <Flower x={70} y={52} color={colors[0]} />
      <Flower x={130} y={52} color={colors[1]} />
      <Flower x={100} y={40} color={colors[2]} scale={1.15} />
      <polygon points="78,112 122,112 108,150 92,150" fill="#BCAAA4" />
      <polygon points="78,112 100,124 122,112 108,150 92,150" fill="#A1887F" />
    </svg>
  );
}

BouquetArt.propTypes = {
  name: React.PropTypes.string.isRequired,
  petals: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
};

export default BouquetArt;
