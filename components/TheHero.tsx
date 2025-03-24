import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import { Clipboard, BookText } from "lucide-react";

const TheHero = () => {
  return (
    <section className="container mx-auto flex w-full flex-col-reverse items-center justify-center gap-8 py-8 md:flex-row md:gap-12 md:py-20">
      <div className="md:w-1/2">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          Comidas saludables, directo a tu puerta
        </h1>
        <p className="mb-8 text-xl">
          Transforma tu alimentación con comidas caseras, equilibradas y
          deliciosas, sin complicaciones.
        </p>
        <section className="flex gap-4">
          <Link
            href="#cta"
            className="text-background flex gap-2 rounded-md border border-green-600 bg-green-600 px-4 py-2 font-semibold transition duration-300 hover:bg-green-700"
          >
            <Clipboard />
            Ver planes
          </Link>
          <Link
            href="#cta"
            className="hover:text-background flex gap-2 rounded-md border border-green-600 bg-transparent px-4 py-2 font-semibold text-green-600 transition duration-300 hover:bg-green-600/50"
          >
            <BookText />
            Ver Menú
          </Link>
        </section>
      </div>
      <HeroCarousel />
    </section>
  );
};

export default TheHero;
