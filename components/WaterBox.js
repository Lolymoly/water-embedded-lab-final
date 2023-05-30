"use client";
import React, { useState } from "react";
import NumberCircleSmall from "./NumberCircleSmall";
import TdsCircleSmall from "./TdsCircleSmall";

const getWaterResult = (tds) => {
  if (tds < 50) return "Drinkable (Ideal drinking water)";
  else if (tds < 100) return "Drinkable, Level 2";
  else if (tds < 200) return "Drinkable, Level 3";
  else if (tds < 300) return "Drinkable, Level 4 (Max)";
  else if (tds < 400) return "Undrinkable";
  else if (tds < 500) return "Undrinkable";
  else return "Undrinkable";
};

const getTextColor = (tds) => {
  if (tds < 300) return "text-black";
  else return "text-red-600";
};

const WaterBox = ({ tds, temperature, name, date }) => {
  const resultText = getWaterResult(tds);
  const textColor = getTextColor(tds);
  const [isTextShown, setIsTextShown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsTextShown(!isTextShown);
    setTimeout(() => {
      setIsOpen(!isOpen);
    }, 150);
  };

  return (
    <div className="border-1 border-black rounded-xl pt-6 pb-4 my-4 pr-4">
      <div className="flex flex-row flex-wrap">
        <TdsCircleSmall number={tds} description="TDS" className="left" />
        <NumberCircleSmall
          number={temperature}
          description="Temperature"
          className="mr-auto"
        />
        <div className="ml-4">
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
      <div className="ml-4 mt-2">
        <button
          onClick={handleToggle}
          className="bg-black rounded-md px-2 pt-1 pb-1.5 text-white text-xs"
        >
          Result {isOpen ? ":" : ">"}
        </button>
      </div>

      <div
        className={`w-full mt-5 ml-8 mb-1 flex space-x-3 transition-all duration-350 ease-in-out overflow-hidden ${
          isTextShown ? "max-h-[500px]" : "max-h-[0px] -mb-7 pb-0.5"
        }`}
      >
        <p className="mb-1 font-bold">Result: </p>
        <p className={`font-semibold ${textColor}`}>{resultText}</p>
      </div>
    </div>
  );
};

export default WaterBox;
