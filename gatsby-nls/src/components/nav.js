import React from 'react';
import { Link } from 'gatsby';

export default function Nav() {
  return (
    <nav>
      <ul>
        <Link to="/">Home Page</Link>
        <Link to="/clubs">Clubs</Link>
      </ul>
    </nav>
  );
}
