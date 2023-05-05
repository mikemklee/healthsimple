import React from "react";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className="w-full h-full flex-1 mt-14 mb-8 p-4 mx-auto flex flex-col max-w-[60rem]">
      {children}
    </div>
  );
}

export default Layout;
