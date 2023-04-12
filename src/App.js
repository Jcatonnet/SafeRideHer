import "./App.css";
import { Travel } from "./pages/travel";
import { ParticlesBackground } from "./globe/components/layout/ParticlesBackground";

export function App() {
  return (
    <>
      <ParticlesBackground />
      <Travel />
    </>
  );
}
