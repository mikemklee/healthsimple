import React from "react";

function Layout({ children }) {
  return (
    <div className="w-full h-full flex-1 mt-14 p-4 mx-auto flex flex-col max-w-[60rem]">
      {children}
    </div>
  );
}

export default Layout;
