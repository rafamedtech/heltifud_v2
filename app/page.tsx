import TheHero from "@/components/TheHero";
import Divider from "@/components/Divider";
import FeatureCard from "@/components/FeatureCard";
import PageSection from "@/components/PageSection";
import { mealPlans, benefits } from "@/lib/info";

export default function Home() {
  return (
    <main className="bg-background">
      <TheHero />
      <Divider />

      <PageSection
        title="¿Qué es Heltifud?"
        description="Somos un servicio que ofrece comidas caseras y saludables a domicilio,
          con la finalidad de ayudarte a llevar una alimentación balanceada y
          libre de estrés."
      />

      <Divider />

      <PageSection
        title="¿Cómo funciona?"
        description="Para recibir tus meal preps a la puerta de tu hogar sólo sigue los siguientes pasos:"
      >
        {mealPlans.map((plan) => (
          <FeatureCard key={plan.id} {...plan} />
        ))}
      </PageSection>

      <Divider />

      <PageSection
        title="¿Por qué elegirnos?"
        description=" Nuestros platillos son preparados con ingredientes frescos y de
          calidad, sin conservadores ni aditivos, para garantizar que disfrutes
          de una comida deliciosa y saludable."
      >
        {benefits.map((benefit) => (
          <FeatureCard key={benefit.id} {...benefit} />
        ))}
      </PageSection>

      <Divider />

      <PageSection
        title="¿Qué opinan nuestros clientes?"
        description="Nuestros clientes son nuestra mejor carta de presentación, conoce lo que
          opinan de nuestros servicios y platillos."
      />
    </main>
  );
}
