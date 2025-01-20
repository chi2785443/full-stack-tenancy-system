import React from "react";

import Card from "../UI/Card";

const TenantItem = (props) => {
  // const month = props.date.toLocaleString("en-US", { month: "long" });
  // const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  // const year = props.date.getFullYear();

  return (
    <Card className=" flex justify-between items-center p-4 m-2 bg-blue-100 text-white">
      <div className=" flex flex-col text-center  bg-blue-700 px-6 py-2 border border-white rounded-xl ">
        <div className="font-bold text-lg">
          {" "}
          12
          {/* {month} */}
        </div>
        <div className="text-xs">
          2000
          {/* {year} */}
        </div>
        <div className="font-bold text-xl">
          16
          {/* {day} */}
        </div>
      </div>
      <div>
        <h2 className=" text-black text-bold">{props.name}</h2>
        <div className="font-bold bg-blue-700 px-6 py-2 border border-white rounded-xl">
          {props.status}
        </div>
      </div>
    </Card>
  );
};

export default TenantItem;
