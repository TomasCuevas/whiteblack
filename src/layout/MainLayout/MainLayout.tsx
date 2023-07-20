//* COMPONENTS *//
import { Header, LayoutHead, MobileSidebar, Footer } from "@/components";

//* INTERFACE *//
interface Props {
  children: React.ReactNode;
  title: string;
  description: string;
  keywords?: string;
  image: string;
}

export const MainLayout: React.FC<Props> = ({
  children,
  description,
  image,
  keywords,
  title,
}) => {
  return (
    <>
      <LayoutHead
        title={title}
        description={description}
        keywords={keywords}
        image={image}
      />

      <Header />
      <MobileSidebar />

      <div className="fixed top-0 left-0 -z-20 h-screen w-screen bg-slate-200 dark:bg-dark" />
      <main className="fixed top-[57px] flex h-[calc(100vh_-_57px)] w-full flex-col overflow-y-scroll">
        <div className="mx-auto w-full max-w-[1200px] px-4 py-4 sm:px-6 xl:px-0">
          {children}
        </div>
        <Footer />
      </main>
    </>
  );
};
