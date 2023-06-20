import Link from "next/link";

export const MeCard: React.FC = () => {
  return (
    <div className="mt-[64px] hidden w-full mdx:block">
      <Link
        href="https://www.linkedin.com/in/tom%C3%A1s-cuevas-dev/"
        target="_blank"
      >
        <div className="flex max-w-xs flex-col gap-4 rounded-md border-l-4 border-b-4 border-double border-purple/20 bg-purple/5 py-4 px-4 shadow-lg shadow-purple/5 hover:border-purple/50">
          <div className="h-[105px] w-[105px] overflow-hidden rounded-full">
            <img
              src="/images/me/4x4.jpg"
              alt="me image"
              className="h-full w-full rounded-full object-cover object-center"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="whitespace-nowrap font-merriweather text-lg text-white">
              Anselmo Tomás Cuevas
            </h2>
            <p className="font-inter text-[15px] text-gray-400">
              Como programador FullStack, disfruto enseñar y compartir lo que
              voy aprendiendo en este emocionante camino del desarrollo de
              software.
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
