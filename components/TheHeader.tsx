import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";
import { RocketIcon, ListCollapse } from "lucide-react";

function TheHeader() {
  return (
    <header className="bg-foreground dark:bg-background sticky top-0 z-50 border-b">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="PrepPal Logo" width={120} height={120} />
          {/* <span className='text-xl font-bold text-green-600'>Heltifud Meal Preps</span> */}
        </Link>

        <nav className="hidden space-x-6 md:flex">
          <Link
            href="#features"
            className="text-background dark:text-foreground hover:text-green-600"
          >
            ¿Cómo funciona?
          </Link>
          <Link
            href="#pricing"
            className="text-background dark:text-foreground flex gap-2 hover:text-green-600"
          >
            <ListCollapse />
            Planes semanales
          </Link>
          <Link
            href="#menu"
            className="text-background dark:text-foreground hover:text-green-600"
          >
            Menu
          </Link>
        </nav>
        <section className="flex items-center gap-4">
          <ModeToggle />
          <Link
            href="#cta"
            className="text-background flex gap-2 rounded-md bg-green-600 px-4 py-2 font-semibold transition duration-300 hover:bg-green-700"
          >
            Ordenar
            <RocketIcon />
          </Link>
        </section>
      </div>
    </header>
  );
}

export default TheHeader;
