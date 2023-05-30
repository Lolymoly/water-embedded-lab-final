import React from "react";
import NumberCircle from "./NumberCircle";
import NumberCircleSmall from "./NumberCircleSmall";

const WaterBox = ({ tds, temperature, name, date }) => {
  return (
    <div className="border-1 border-black rounded-xl flex flex-row pt-6 pb-4 my-4 pr-4">
      <NumberCircleSmall number={tds} description="TDS" className="left" />
      <NumberCircleSmall
        number={temperature}
        description="Temperature"
        className="mr-auto"
      />
      <div className="w-full ml-4">
        <div className="mt-1 mb-6 ">
          <div className="text-xl text-gray-800 font-bold mb-1">Name</div>
          {name}
        </div>
        <div className="mt-6 mb-4">
          <div className="text-xl text-gray-800 font-bold mb-1">Date</div>
          {date}
        </div>
      </div>
    </div>
  );
};

export default WaterBox;
