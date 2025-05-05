import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className=" p-4 sticky ">
      <div className="max-w-2xl mx-auto flex items-center justify-between">
        
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

