import FadeIn from "./FadeIn";

export default function TradeLifecycle() {
  const steps = [
    "Deposit USDC",
    "Choose a Market",
    "Select Leverage",
    "Open Position",
    "Oracle Updates Price",
    "Close Position",
    "Instant Settlement",
  ];

  return (
    <FadeIn>
    <section className="mx-auto max-w-6xl px-6 py-32">
      <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
        Trade Lifecycle
      </p>

      <h2 className="mt-4 text-4xl font-bold">
        From wallet deposit to instant settlement.
      </h2>

      <div className="mt-16 flex flex-col items-center gap-6">
        {steps.map((step) => (
          <div
            key={step}
            className="flex flex-col items-center"
          >
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 px-8 py-6">
              {step}
            </div>

            {step !== "Instant Settlement" && (
              <div className="py-2 text-3xl text-zinc-500">
                ↓
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
    </FadeIn>
  );
}