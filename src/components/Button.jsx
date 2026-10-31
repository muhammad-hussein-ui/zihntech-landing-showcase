// A button-looking link. It navigates, so the real element is <a>.
// { label, href } are "props": values the parent passes in as attributes.
function Button({ label, href }) {
  return (
    <a
      href={href}
      className="inline-block rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700"
    >
      {label}
    </a>
  );
}

export default Button;
