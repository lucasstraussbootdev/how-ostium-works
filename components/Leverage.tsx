export default function Leverage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-32">
      <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
        Leverage
      </p>

      <h2 className="mt-4 text-4xl font-bold">
        Control larger positions with less capital.
      </h2>

      <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
        Leverage allows traders to amplify both gains and losses.
        Depositing $100 with 10x leverage creates a $1,000 position.
        Ostium supports up to 200x leverage on select markets.
      </p>

      <div className="mt-16 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
        <div className="space-y-6 text-lg">

          <div>
            Collateral: <span className="font-bold">$100</span>
          </div>

          <div className="text-zinc-500">
            ↓
          </div>

          <div>
            Leverage: <span className="font-bold">10x</span>
          </div>

          <div className="text-zinc-500">
            ↓
          </div>

          <div>
            Position Size:
            <span className="ml-2 font-bold text-green-400">
              $1,000
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}