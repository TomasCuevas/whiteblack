//* STYLES *//
import Style from "./articleSidebarContent.module.css";

//* INTERFACE *//
interface Props {
  allH2: HTMLElement[];
  allH3: HTMLElement[][];
}

export const ArticleSidebarContent: React.FC<Props> = ({ allH2, allH3 }) => {
  const navigate = (id: string) => {
    document.getElementById(id)?.scrollIntoView();
  };

  return (
    <aside
      className={`sticky top-[10px] hidden h-[calc(100vh_-_67px)] w-full overflow-auto sidebar:block ${Style.aside}`}
    >
      <ul className="rounded-lg bg-purple/5 p-4">
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
