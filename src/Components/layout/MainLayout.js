import React from "react";
import Sidebar from "./Sidebar";

const MainLayout = ({ highlight, children }) => {
  return (
    <>
      <div className="px-10 grid grid-cols-12 gap-4">
        <div className="col-span-3">
          <Sidebar highlight={highlight} />
        </div>
        <div className="col-span-9">{children}</div>
      </div>
    </>
  );
};

export default MainLayout;
