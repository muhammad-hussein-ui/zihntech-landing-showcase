function Navbar() {
  const brand = "Muhammad Hussein";

  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-xl font-bold text-emerald-700">
          {brand}
        </a>
        <nav>
          {/* hidden on phones, a row from 768px up (md:) */}
          <ul className="hidden gap-8 font-medium text-slate-600 md:flex">
            <li>
              <a href="#skills" className="hover:text-emerald-600">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-emerald-600">
                Projects
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-emerald-600">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-emerald-600">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
