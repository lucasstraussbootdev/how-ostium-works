import FadeIn from "./FadeIn";

export default function OraclePricing() {
  return (
    <FadeIn>
    <section
      id="oracles"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
      <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
        Oracle Pricing
      </p>

      <h2 className="mt-4 text-4xl font-bold">
        Bringing real-world prices onchain.
      </h2>

      <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
        Ostium uses Chainlink Low-Latency oracles for crypto assets and
        Stork Network for real-world assets like stocks, commodities,
        indices, and forex.
      </p>

      <div className="mt-16 flex flex-col items-center gap-6">

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 px-8 py-6">
          Global Markets
        </div>

        <div className="text-3xl text-zinc-500">
          ↓
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 px-8 py-6">
          Oracle Networks
        </div>

        <div className="text-3xl text-zinc-500">
          ↓
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 px-8 py-6">
          Ostium Smart Contracts
        </div>

      </div>
    </section>
    </FadeIn>
  );
}