import Hero from "../components/Hero.tsx";
import Produk from "../components/Produk.tsx";
import Keunggulan from "../components/Keunggulan.tsx";
import Testimoni from "../components/Testimoni.tsx";
import Informasi from "../components/Informasi.tsx";

function LandingPage() {
  return (
    <section className="px-4 mt-28">
      <Hero />
      <Produk />
      <Keunggulan />
      <Testimoni />
      <Informasi />
    </section>
  );
}

export default LandingPage;
