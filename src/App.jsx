import { Navbar } from "./components/molecules/Navbar";
import { Hero } from "./components/organisms/Hero";
import { Numbers } from "./components/organisms/Numbers";

function App() {
  return (
    <div className="w-screen">
      <Navbar />
      <Hero />
      <Numbers />
    </div>
  );
}

export default App;
