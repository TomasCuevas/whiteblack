import { useEffect, useState, useRef } from "react";

//* interface *//
interface Props {
  allH2: any[];
  allH3: any[][];
}

export const ArticleSidebarContent: React.FC<Props> = ({ allH2, allH3 }) => {
  const left = useRef(0);
  const [leftPosition, setLeftPosition] = useState(0);

  const navigate = (id: string) => {
    document.getElementById(id)?.scrollIntoView();
  };

  useEffect(() => {
    const firstValue = document
      .getElementById("article")
      ?.getBoundingClientRect().left!;

    left.current = firstValue;
    setLeftPosition(firstValue >= 364 ? firstValue - 340 : firstValue - 220);

    const responsive = () => {
      const newValue = document
        .getElementById("article")
        ?.getBoundingClientRect().left!;

      left.current = newValue;
      setLeftPosition(newValue >= 364 ? newValue - 340 : newValue - 220);
    };
    window.addEventListener("resize", responsive);

    return () => removeEventListener("resize", responsive);
  }, [left]);

  return (
    <div
      style={{ left: leftPosition }}
      className="2xl fixed top-[120px] left-[84.5px] hidden h-[calc(100vh_-_140px)] max-w-[200px] overflow-auto xl:block 2xl:max-w-[260px]"
    >
      <ul>
        {allH2.map((h2, index) => {
          const h3s = allH3[index];

          return (
            <>
              <li
                key={h2.getAttribute("id")}
                className="my-2 rounded-md px-2 text-sm text-white duration-300"
              >
                <span
                  onClick={() => navigate(h2.getAttribute("id"))}
                  className="cursor-pointer duration-300 hover:pl-1 hover:underline"
                >
                  - {h2.textContent}
                </span>
                <ul className="ml-5">
                  {h3s.map((h3) => (
                    <li
                      className="item my-[6px] cursor-pointer text-gray-300 duration-300 hover:pl-1 hover:text-white"
                      key={h3.getAttribute("id")}
                      onClick={() => navigate(h3.getAttribute("id"))}
                    >
                      <span>- {h3.textContent}</span>
                    </li>
                  ))}
                </ul>
              </li>
              {allH2.length === index + 1 ? null : (
                <hr className="m-0 border-[1px] border-purple/20 p-0" />
              )}
            </>
          );
        })}
      </ul>
    </div>
  );
};
