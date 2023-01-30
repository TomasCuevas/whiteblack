import Head from "next/head";
import { useContext } from "react";

//* components *//
import { Header } from "../header";
import { MobileSidebar } from "../sidebar";
import { Footer } from "../footer";

//* context *//
import { UIContext } from "../../context";

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
  const { isSidebarOpen } = useContext(UIContext);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div className="fixed top-0 left-0 -z-20 h-screen w-screen bg-dark"></div>
      <Header />
      {isSidebarOpen ? <MobileSidebar /> : null}
      <main className="mx-auto mt-20 mb-8 w-full max-w-[1200px] px-4 pt-4 sm:px-6 xl:px-0">
        {children}
      </main>
      <Footer />
    </>
  );
};
