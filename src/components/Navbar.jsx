function Navbar() {
  const brand = "Muhammad Hussein";

  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white">
      {/* Invisible until a keyboard user presses Tab, then it lets them skip the menu */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-full focus:bg-emerald-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-xl font-bold text-emerald-700">
          {brand}
        </a>

        <nav aria-label="Main">
          {/* Desktop links: hidden on phones, a row from 768px up */}
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

          {/* Phone menu: <details> opens and closes with no JavaScript, shown below 768px */}
          <details className="relative md:hidden">
            <summary className="cursor-pointer list-none rounded-full border border-slate-300 px-4 py-2 font-medium text-slate-700 [&::-webkit-details-marker]:hidden">
              Menu
            </summary>
            <ul className="absolute right-0 mt-2 w-48 rounded-xl border border-slate-200 bg-white p-4 shadow-md">
              <li>
                <a
                  href="#skills"
                  className="block py-2 text-slate-700 hover:text-emerald-600"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="block py-2 text-slate-700 hover:text-emerald-600"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="block py-2 text-slate-700 hover:text-emerald-600"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-2 text-slate-700 hover:text-emerald-600"
                >
                  Contact
                </a>
              </li>
            </ul>
          </details>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
