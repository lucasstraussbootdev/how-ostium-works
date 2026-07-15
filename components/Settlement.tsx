export default function Settlement() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
        Settlement
      </p>

      <h2 className="mt-4 text-4xl font-bold">
        Instant onchain settlement with daily rebalancing.
      </h2>

      <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
        Winning traders are paid immediately in USDC onchain. The
        offchain hedging layer mirrors these positions and a daily
        settlement process rebalances capital between both systems.
      </p>

      <div className="mt-16 flex flex-col items-center gap-6">

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 px-8 py-6">
          Trader Closes Position
        </div>

        <div className="text-3xl text-zinc-500">
          ↓
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 px-8 py-6">
          USDC Paid Instantly
        </div>

        <div className="text-3xl text-zinc-500">
          ↓
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 px-8 py-6">
          Daily Settlement Run
        </div>

        <div className="text-3xl text-zinc-500">
          ↓
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 px-8 py-6">
          Vault Rebalanced
        </div>

      </div>
    </section>
  );
}