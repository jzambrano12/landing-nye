import { Navbar } from "./components/molecules/Navbar";
import { Hero } from "./components/organisms/Hero";
import { Numbers } from "./components/organisms/Numbers";
import { ShinyJeans } from "./components/organisms/ShinyJeans";

function App() {
  return (
    <div className="flex flex-col w-screen">
      <Navbar />
      <Hero />
      <Numbers />
      <ShinyJeans />
    </div>
  );
}

export default App;
