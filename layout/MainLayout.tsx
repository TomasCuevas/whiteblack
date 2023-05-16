//* components *//
import { Header, LayoutHead, MobileSidebar, Footer } from "@/components/layout";

//* interface *//
interface Props {
  children: React.ReactNode;
  title: string;
  description: string;
}

export const MainLayout: React.FC<Props> = ({
  children,
  description,
  title,
}) => {
  return (
    <>
      <LayoutHead title={title} description={description} />

      <Header />
      <MobileSidebar />

      <div className="fixed top-0 left-0 -z-20 h-screen w-screen bg-dark" />
      <main className="mx-auto mt-20 mb-8 w-full max-w-[1200px] px-4 pt-4 sm:px-6 xl:px-0">
        {children}
      </main>

      <Footer />
    </>
  );
};
