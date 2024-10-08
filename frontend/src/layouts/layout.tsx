import { PropsWithChildren } from "react";
import Navbar from "../components/Navbar";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      {children}
    </div>
  );
};

export default layout;
