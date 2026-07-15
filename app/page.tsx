import Hero from "../components/Hero";
import Vision from "../components/Vision";
import ArchitectureDiagram from "../components/ArchitectureDiagram";
import Benefits from "../components/Benefits";
import TradeLifecycle from "../components/TradeLifecycle";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <Vision />
      <ArchitectureDiagram />
      <Benefits />
      <TradeLifecycle />
    </main>
  );
}