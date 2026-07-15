import FadeIn from "./FadeIn";

export default function Vision() {
  return (
    <FadeIn>
      <section className="mx-auto max-w-5xl px-6 py-32">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
          Why Ostium Exists
        </p>

        <h2 className="mt-4 text-4xl font-bold leading-tight">
          Ostium aims to be for global markets what stablecoins were for the
          dollar.
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
          Stablecoins did not replace the dollar. They extended access to it.
          Ostium does the same for stocks, commodities, forex, indices, and
          crypto by bringing exposure to global markets onchain.
        </p>
      </section>
    </FadeIn>
  );
}