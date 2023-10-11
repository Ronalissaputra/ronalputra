import React from "react";
import { Framework } from "../api/Framework";

const ListFramework = () => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
      {Framework.map((item) => (
        <div
          key={item.id}
          className="bg-teal-500 p-2 rounded-md text-center flex flex-col items-center"
        >
          <item.logo className={`text-[200px] ${item.color}`} />
          <p className="text-white text-3xl">{item.framework}</p>
        </div>
      ))}
    </div>
  );
};

export default ListFramework;
