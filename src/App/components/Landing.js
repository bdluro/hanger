import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

const Landing = () => {
  return (
    <div className="main">
      <img id="logo" src="./src/Images/HangerLogo.png" alt="hangerLogo" />

      <NavLink to="/closet">View Closet</NavLink>
    </div>
  );
};

export default Landing;
