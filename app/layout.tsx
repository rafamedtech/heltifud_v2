import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import TheHeader from "@/components/TheHeader";
import LocationDialog from "@/components/LocationDialog";
import Copyright from "@/components/Copyright";
import { NavButton } from "@/components/NavButton";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Heltifud Meal Preps",
  description: "Comidas caseras y saludables a domicilio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${montserrat.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <section className="fixed right-4 bottom-4 md:hidden">
            <NavButton />
          </section>
          <LocationDialog />
          <TheHeader />
          <main className="min-h-screen">{children}</main>
          <footer className="bg-foreground">
            <section className="py-4">
              <section className="mb-2 flex justify-center">
                {/* <Logo /> */}
              </section>
              <Copyright />
              <p className="text-background text-center text-sm">
                Servicio disponible para Tijuana y Rosarito, B.C.
              </p>
            </section>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
