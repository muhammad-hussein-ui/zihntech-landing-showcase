function Footer() {
  const year = new Date().getFullYear();
  const owner = "Muhammad Hussein";

  return (
    <footer className="bg-slate-900 px-6 py-8 text-center text-slate-400">
      <p>
        &copy; {year} {owner}. Built with React, Vite and Tailwind CSS.
      </p>
    </footer>
  );
}

export default Footer;
