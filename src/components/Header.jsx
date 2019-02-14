import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../assets/images/bg.jpg';

function Header(){
  var schedulStyle = {
    backgroundImage : 'url('+{bg} +')'
  };
  return (
    <div style={schedulStyle}>
      <h1>Farmers Market</h1>
      <Link to="/">Home</Link> | <Link to="/seasonalproduce">Seasonal Produce</Link>
    </div>
  );
}

export default Header;