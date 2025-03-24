interface PageSectionProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

const PageSection = ({ title, description, children }: PageSectionProps) => {
  return (
    <section className="pb-8">
      <h2 className="mt-8 text-3xl font-bold">{title}</h2>
      <p className="mt-4 text-lg">{description}</p>

      {children && (
        <section className="flex flex-col gap-4 py-8">{children}</section>
      )}
    </section>
  );
};

export default PageSection;
