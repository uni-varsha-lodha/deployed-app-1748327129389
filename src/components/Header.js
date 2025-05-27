import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-500 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Generate Claims</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-gray-200">Home</Link></li>
            <li><Link to="/claims" className="hover:text-gray-200">Claims</Link></li>
            <li><Link to="/about" className="hover:text-gray-200">About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;