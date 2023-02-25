import { useState } from "react";

//* interface *//
interface Return {
  pagination: number;
  increment(): void;
  decrement(): void;
}

export const usePagination = (): Return => {
  const [pagination, setPagination] = useState(1);

  const increment = () => setPagination((prev) => prev + 1);
  const decrement = () => setPagination((prev) => (prev === 1 ? 1 : prev - 1));

  return {
    // getters
    pagination,

    // methods
    increment,
    decrement,
  };
};
