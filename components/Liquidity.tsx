import FadeIn from "./FadeIn";

export default function Liquidity() {
  return (
    <FadeIn>
    <section
      id="liquidity"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
      <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
        Liquidity
      </p>

      <h2 className="mt-4 text-4xl font-bold">
        Liquidity inherited from global markets.
      </h2>

      <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
        Instead of rebuilding liquidity from scratch, Ostium connects to
        institutional partners that source pricing from the deepest
        underlying markets.
      </p>

      <div className="mt-16 flex flex-col items-center gap-6">

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 px-8 py-6">
          Trader Order
        </div>

        <div className="text-3xl text-zinc-500">
          ↓
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 px-8 py-6">
          Institutional Partners
        </div>

        <div className="text-3xl text-zinc-500">
          ↓
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 px-8 py-6">
          Global Markets
        </div>

      </div>
    </section>
    </FadeIn>
  );
}