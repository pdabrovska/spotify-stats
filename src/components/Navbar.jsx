import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
      <Link to='/'>Main</Link>
      <Link to='/info'> Info</Link>
    </div>
  )
}
