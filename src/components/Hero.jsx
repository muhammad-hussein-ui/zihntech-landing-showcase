import Button from "./Button";

function Hero() {
  const role = "Frontend developer in training";

  return (
    <section
      id="top"
      className="bg-slate-900 px-6 py-24 text-center text-white"
    >
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold md:text-6xl">
          I turn designs into responsive web pages.
        </h1>
        <p className="mt-6 text-lg text-amber-300">{role}</p>
        <p className="mt-4 text-lg text-slate-300">
          I am Muhammad, studying at Zihntech Academy. I build with HTML, CSS,
          JavaScript and React, and I keep every project on GitHub.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button label="View my work" href="#projects" />
          <Button label="Get in touch" href="#contact" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
