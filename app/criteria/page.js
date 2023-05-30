import WaterBox from "@/components/WaterBox";
import Image from "next/image";
import React from "react";

const Criteria = () => {
  return (
    <div className="w-full flex-center flex-col">
      {/* <br />
      <div className="level-box border-black border-2 w-10/12 mt-12">
        <div className="bg-blue-300 w-10/12 h-full"></div>
      </div> */}
      <div className="border-2 rounded-lg pt-2 pb-6 mt-10 mb-6 pr-8">
        <Image
          src="/TDS_Chart.png"
          alt="TDS_Chart"
          width={713}
          height={218}
        ></Image>
      </div>
      <div className="desc">* Temperature เป็นส่วนหนึ่งในการคำนวณหาค่า TDS</div>
    </div>
  );
};

export default Criteria;
