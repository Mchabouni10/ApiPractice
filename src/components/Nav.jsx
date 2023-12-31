import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/animals">Animal List</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;