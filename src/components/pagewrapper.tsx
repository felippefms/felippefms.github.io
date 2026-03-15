import type { ReactNode } from "react";
import CloseBtn from "./closebtn";

type PageWrapperProps = {
  children: ReactNode;
};

function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className="bg-sectionbgcolor w-screen md:w-[60%] h-screen absolute py-28 px-4 overflow-y-auto">
      <CloseBtn />
      {children}
    </div>
  );
}

export default PageWrapper;