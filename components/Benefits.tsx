import FadeIn from "./FadeIn";

export default function Benefits() {
  const benefits = [
    {
      title: "Self Custody",
      description:
        "Your collateral stays in smart contracts and remains under your control.",
    },
    {
      title: "Instant Settlement",
      description:
        "Profits and losses settle immediately in USDC directly to your wallet.",
    },
    {
      title: "Full Transparency",
      description:
        "Every fill and price can be verified onchain.",
    },
    {
      title: "Deep Liquidity",
      description:
        "Pricing comes from the deepest underlying global markets.",
    },
    {
      title: "Direct Protocol Access",
      description:
        "Positions can be managed without depending on the Ostium frontend.",
    },
  ];

  return (
    <FadeIn>
    <section className="mx-auto max-w-6xl px-6 py-32">
      <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
        Why Trade on Ostium
      </p>

      <h2 className="mt-4 text-4xl font-bold">
        Institutional execution with DeFi principles.
      </h2>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit) => (
          <div
            key={benefit.title}
            className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8"
          >
            <h3 className="text-xl font-semibold">
              {benefit.title}
            </h3>

            <p className="mt-4 text-zinc-400">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
    </FadeIn>
  );
}