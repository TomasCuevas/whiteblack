interface Props {
  title: string;
}

export const SectionTitle: React.FC<Props> = ({ title }) => {
  return (
    <section className="mt-5">
      <h3 className="font-roboto text-xl font-medium text-purple">{title}</h3>
    </section>
  );
};
