import * as React from 'react';
import { Link } from 'react-router-dom';

interface NavProps {
  pages: string[];
}

const Nav: React.FC <NavProps> = ({ pages }) => (
  <nav>
    <ul>
      {pages.map(page => (
        <li key={page}>
          <Link to={`/${page}`}>{(page != "")?page:"home"} </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;