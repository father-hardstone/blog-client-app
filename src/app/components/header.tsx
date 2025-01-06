// Header component
const Header = () => (
    <header className="bg-gray-800 text-white p-4">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Social Media App</h1>
        <ul className="flex gap-4">
          <li>
            <a href="/home" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );

  export default Header;