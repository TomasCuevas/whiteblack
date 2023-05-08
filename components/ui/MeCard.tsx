export const MeCard: React.FC = () => {
  return (
    <div className="mt-10 hidden lg:block">
      <div className="flex max-w-xs flex-col gap-4 border-l border-light py-4 px-4">
        <div className="h-[95px] w-[95px] overflow-hidden rounded-full">
          <img
            src="/images/me/4x4.jpg"
            alt="me image"
            className="rounded-full object-cover object-center"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="whitespace-nowrap font-merriweather text-lg text-white">
            Anselmo Tomás Cuevas
          </h2>
          <p className="font-roboto text-sm text-gray-400">
            Programador FullStack, que le gusta enseñar y compartir lo que va
            aprendiendo en este camino tan apasionante del desarrollo de
            software.
          </p>
        </div>
      </div>
    </div>
  );
};
