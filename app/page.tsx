import TheHero from "@/components/TheHero";
import Divider from "@/components/Divider";
import FeatureCard from "@/components/FeatureCard";

import { mealPlans, benefits } from "@/lib/info";

export default function Home() {
  return (
    <main className="bg-background">
      <TheHero />
      <Divider />
      <section className="pb-8">
        <h2 className="mt-8 text-3xl font-bold">¿Qué es Heltifud?</h2>
        <p className="mt-4 text-lg">
          Somos un servicio que ofrece comidas caseras y saludables a domicilio,
          con la finalidad de ayudarte a llevar una alimentación balanceada y
          libre de estrés.
        </p>
      </section>
      <Divider />
      <section className="pb-8">
        <h2 className="mt-8 text-3xl font-bold">¿Cómo funciona?</h2>
        <p className="mt-4 text-lg">
          Para recibir tus meal preps a la puerta de tu hogar sólo sigue los
          siguientes pasos:
        </p>
        <section className="flex flex-col gap-4 py-8">
          {mealPlans.map((plan) => (
            <FeatureCard key={plan.id} {...plan} />
          ))}
        </section>
      </section>
      <Divider />
      <section>
        <h2 className="mt-8 text-3xl font-bold">¿Por qué elegirnos?</h2>
        <p className="mt-4 text-lg">
          Nuestros platillos son preparados con ingredientes frescos y de
          calidad, sin conservadores ni aditivos, para garantizar que disfrutes
          de una comida deliciosa y saludable.
        </p>

        <section className="flex flex-col gap-4 py-8">
          {benefits.map((benefit) => (
            <FeatureCard key={benefit.id} {...benefit} />
          ))}
        </section>
      </section>
      <Divider />
    </main>
  );
}
