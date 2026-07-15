import Hero from "../components/Hero";
import Vision from "../components/Vision";
import ArchitectureDiagram from "../components/ArchitectureDiagram";
import Benefits from "../components/Benefits";
import TradeLifecycle from "../components/TradeLifecycle";
import Perpetuals from "../components/Perpetuals";
import Leverage from "../components/Leverage";
import Liquidity from "../components/Liquidity";
import OraclePricing from "../components/OraclePricing";
import Settlement from "../components/Settlement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />

    
      <Hero />
      <Vision />
      <ArchitectureDiagram />
      <Benefits />
      <TradeLifecycle />
      <Perpetuals />
      <Leverage />
      <Liquidity />
      <OraclePricing />
      <Settlement />
      <Footer />
    </main>
  );
}