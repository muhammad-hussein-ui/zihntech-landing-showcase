import PricingCard from "./PricingCard";

function Pricing() {
  return (
    <section id="services" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-slate-900">
          Sample service packages
        </h2>
        <p className="mt-3 text-center text-slate-600">
          Placeholder prices, written for this assignment.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <PricingCard
            name="Landing page"
            price="$50"
            summary="One responsive page built from your design."
          />
          <PricingCard
            name="Portfolio site"
            price="$150"
            summary="A multi-section site that shows your work."
          />
          <PricingCard
            name="Web app"
            price="$300"
            summary="An interactive site with forms and live updates."
          />
        </div>
      </div>
    </section>
  );
}

export default Pricing;
