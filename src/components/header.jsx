/* import React from 'react';

const Header = () => {
    return (
    <>
        <header>
        <h1>Budget App</h1>
        </header>
    </>
        
    );
    }

    export default Header; */

    // src/components/header.jsx
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className=" p-2 sticky top-10">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        <nav className="flex space-x-6">
          <Link
            to="/"
            className="text-gray-700 hover:text-fuchsia-100 transition-colors font-bold "
          >
            Home
          </Link>
          <Link
            to="/home"
            className="text-gray-700 hover:text-fuchsia-100 transition-colors font-bold"
          >
            Products
          </Link>
        </nav>
      </div>
    </header>
  );
}

