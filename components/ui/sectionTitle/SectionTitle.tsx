//* interface *//
interface Props {
  title: string;
}

export const SectionTitle: React.FC<Props> = ({ title }) => {
  return (
    <div className="mt-5">
      <h3 className="font-merriweather text-xl font-semibold text-purple sm:text-2xl">
        {title}
      </h3>
    </div>
  );
};
