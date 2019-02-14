import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>Farmers Market</h1>
      <Link to="/">Home</Link> | <Link to="/seasonalproduce">Seasonal Produce</Link>
    </div>
  );
}

export default Header;