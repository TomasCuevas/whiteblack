import { useEffect, useState, useRef } from "react";

//* interface *//
interface Props {
  allH2: HTMLElement[];
  allH3: HTMLElement[][];
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
    setLeftPosition(firstValue >= 364 ? firstValue - 360 : firstValue - 220);

    const responsive = () => {
      const newValue = document
        .getElementById("article")
        ?.getBoundingClientRect().left!;

      left.current = newValue;
      setLeftPosition(newValue >= 364 ? newValue - 360 : newValue - 220);
    };
    window.addEventListener("resize", responsive);

    return () => removeEventListener("resize", responsive);
  }, [left]);

  return (
    <aside
      style={{ left: leftPosition }}
      className="fixed top-[120px] left-[84.5px] hidden h-[calc(100vh_-_140px)] max-w-[200px] overflow-auto xl:block 2xl:max-w-[260px]"
    >
      <ul>
        {allH2.map((h2, index) => {
          const h3s = allH3[index];

          return (
            <>
              <li
                key={h2.getAttribute("id")}
                className="my-2 rounded-md text-sm text-white"
              >
                <span
                  id={`${h2.getAttribute("id")}-sidebar`}
                  onClick={() => navigate(h2.getAttribute("id")!)}
                  className="cursor-pointer rounded-sm font-medium hover:bg-gray-400/10"
                >
                  {h2.getAttribute("content")}
                </span>
                <ul>
                  {h3s?.map((h3) => (
                    <li
                      id={`${h3.getAttribute("id")}-sidebar`}
                      key={h3.getAttribute("id")}
                      className="item group cursor-pointer border-l border-purple/20 py-1 pl-5 text-gray-300"
                      onClick={() => navigate(h3.getAttribute("id")!)}
                    >
                      <span className="rounded-sm hover:bg-gray-400/10">
                        {h3.getAttribute("content")}
                      </span>
                    </li>
                  ))}
                </ul>
              </li>
              {allH2.length === index + 1 ? null : (
                <div className="border-b border-purple/30" />
              )}
            </>
          );
        })}
      </ul>
    </aside>
  );
};
