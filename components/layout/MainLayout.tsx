import Head from "next/head";
import { useContext } from "react";

//* components *//
import { Header } from "../header";
import { MobileSidebar } from "../sidebar";

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
      <div className="absolute top-0 left-0 -z-10 h-screen w-screen bg-[url('/images/backgrounds/background_mobile.svg')] bg-cover bg-no-repeat lg:bg-[url('/images/backgrounds/background.svg')]"></div>
      <div className="fixed top-0 left-0 -z-20 h-screen w-screen bg-dark"></div>
      <Header />
      {isSidebarOpen ? <MobileSidebar /> : null}
      <div className="min-w-screen flex min-h-screen justify-center bg-black/30 backdrop-blur-sm">
        <main className="h-[3000px mt-20 h-[2000px] w-full max-w-[1200px]">
          {children}
        </main>
      </div>
    </>
  );
};
