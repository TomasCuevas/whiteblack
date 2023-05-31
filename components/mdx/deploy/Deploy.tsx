import Link from "next/link";

//* icon *//
import { DeployIcon } from "@/components/icons";

interface Props {
  url?: string;
}

export const Deploy: React.FC<Props> = ({ url = "/" }) => {
  return (
    <Link href={url} target="__blank">
      <div className="mt-5 flex w-full items-center gap-5 rounded-full border-2 border-white bg-black px-10 py-2 hover:scale-[103%] hover:bg-stone-900">
        <DeployIcon className="w-8 text-white" />
        <strong
          style={{ color: "white", fontWeight: 800 }}
          className="text-lg sm:text-xl"
        >
          Demostración en línea
        </strong>
      </div>
    </Link>
  );
};
