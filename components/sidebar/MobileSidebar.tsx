import { useContext } from "react";
import { MdClose } from "react-icons/md";

//* context *//
import { UIContext } from "../../context";

export const MobileSidebar: React.FC = () => {
  const { toggleSidebar } = useContext(UIContext);

  return (
    <aside className="fixed top-0 left-0 z-50 h-screen w-screen bg-dark/90 backdrop-blur-sm">
      <div className="flex h-20 w-full items-center justify-center px-4">
        <div className="flex h-14 w-full items-center px-4">
          <MdClose
            onClick={toggleSidebar}
            className="ml-auto h-10 w-10 text-white"
          />
        </div>
      </div>
    </aside>
  );
};
