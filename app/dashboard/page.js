"use client";
import WaterBox from "@/components/WaterBox";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:8000/api/test");
      const data = await res.json();
      setData(data);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-extrabold blue_gradient text-center mt-4 mb-8">
        ~ Water Sources ~
      </h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {data.map((water) => (
            <WaterBox
              tds={water.Data.TDS_Value}
              temperature={water.Data.Thermo_Value}
              name={water.Data.Location}
              date={water.Data.Time}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
