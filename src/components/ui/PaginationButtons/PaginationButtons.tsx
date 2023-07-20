//* ICONS *//
import { RiArrowDropLeftFill, RiArrowDropRightFill } from "react-icons/ri";

//* INTERFACE *//
interface Props {
  itemsLength: number;
  itemsPerPage: number;
  pagination: number;
  increment(): void;
  decrement(): void;
}

export const PaginationButtons: React.FC<Props> = ({
  itemsLength,
  itemsPerPage,
  pagination,
  increment,
  decrement,
}) => {
  return (
    <div className="flex gap-3 [&>button]:flex [&>button]:items-center [&>button>svg]:text-4xl [&>button>svg]:text-purple dark:[&>button>svg]:text-purple/70 [&>button>span]:font-merriweather [&>button>span]:text-sm [&>button>span]:text-purple dark:[&>button>span]:text-purple/70 [&>button>span]:xs:text-lg">
      {pagination > 1 ? (
        <button onClick={decrement} className="group mr-auto">
          <RiArrowDropLeftFill className="group-hover:text-purple" />
          <span className="group-hover:text-purple">
            artículos más recientes
          </span>
        </button>
      ) : null}
      {pagination * itemsPerPage < itemsLength ? (
        <button onClick={increment} className="group ml-auto">
          <span className="group-hover:text-purple">artículos anteriores</span>
          <RiArrowDropRightFill className="group-hover:text-purple" />
        </button>
      ) : null}
    </div>
  );
};
