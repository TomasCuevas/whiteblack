//* icons *//
import { RiArrowDropLeftFill, RiArrowDropRightFill } from "react-icons/ri";

//* interface *//
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
    <div className="flex gap-3">
      {pagination > 1 ? (
        <button onClick={decrement} className="group mr-auto flex items-center">
          <RiArrowDropLeftFill className="text-4xl text-purple/70 group-hover:text-purple" />
          <span className="font-merriweather text-xs text-purple/70 group-hover:text-purple xs:text-sm">
            artículos más recientes
          </span>
        </button>
      ) : null}
      {pagination * itemsPerPage < itemsLength ? (
        <button onClick={increment} className="group ml-auto flex items-center">
          <span className="font-merriweather text-xs text-purple/70 group-hover:text-purple xs:text-sm">
            artículos anteriores
          </span>
          <RiArrowDropRightFill className="text-4xl text-purple/70 group-hover:text-purple" />
        </button>
      ) : null}
    </div>
  );
};
