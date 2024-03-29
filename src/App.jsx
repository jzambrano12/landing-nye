import { Footer } from "./components/molecules/Footer";
import { Navbar } from "./components/molecules/Navbar";
import { Benefits } from "./components/organisms/Benefits";
import { Blogs } from "./components/organisms/Blogs";
import { Collections } from "./components/organisms/Collections";
import { ContactUs } from "./components/organisms/ContactUs";
import { FAQ } from "./components/organisms/FAQ";
import { Hero } from "./components/organisms/Hero";
import { NewsLetter } from "./components/organisms/Newsletter";
import { Numbers } from "./components/organisms/Numbers";
import { ShinyJeans } from "./components/organisms/ShinyJeans";
import { Testimonials } from "./components/organisms/Testimonials";
import { TrustUs } from "./components/organisms/TrustUs";

function App() {
  return (
    <main className="flex flex-col w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Numbers />
      <ShinyJeans />
      <ContactUs />
      <Collections />
      <Benefits />
      <TrustUs />
      <FAQ />
      <Blogs />
      <Testimonials />
      <NewsLetter />
      <Footer />
    </main>
  );
}

export default App;
