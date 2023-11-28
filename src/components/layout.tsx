import Navbar from "./navbar";
import Footer from "./footer";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout = (props: Readonly<Props>) => {
  const { children } = props;
  return (
    <div className="lg: w-full h-screen font-roboto flex flex-col overflow-auto bg-black">
      <Navbar />
      <div className="w-full grow mx-auto flex flex-col">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
