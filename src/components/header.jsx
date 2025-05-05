import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="p-6 sticky top-0 sm:top-0 text-left bg-white z-50">
      <div className="sm:max-w-4xl mx-auto flex ">
        
        <nav className="flex space-x-6">
          <Link
            to="/"
            className="text-gray-700 hover:text-fuchsia-100 transition-colors font-bold active:font-light "
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

