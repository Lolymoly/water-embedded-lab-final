"use client";
import NumberCircle from "@/components/NumberCircle";
import { useEffect, useState } from "react";

const Home = () => {
  const [tds, setTds] = useState(252);
  const [temperature, setTemp] = useState(31.6);
  const [isLoading, setIsLoading] = useState(false);
  var name;

  async function getValue() {
    setIsLoading(true);
    setTds("...");
    setTemp("...");
    setTimeout(async () => {
      name = document.getElementById("waterSourceName").value;
      if (name == "") {
        alert("Name Required");
        return;
      }

      document.getElementById("waterSourceName").value = "";

      const sensorValue = await fetch(
        "https://embedded-lab-backend-andew-production.up.railway.app/api/getRTOS"
      );
      const sensorValueJson = await sensorValue.json();
      const thisValue = sensorValueJson.Result;
      setIsLoading(false);

      thisValue.TDS_Value = Number(thisValue.TDS_Value.toFixed(0));
      thisValue.Thermo_Value = Number(thisValue.Thermo_Value.toFixed(1));

      setTds(thisValue.TDS_Value);
      setTemp(thisValue.Thermo_Value);
      submitValue(thisValue.TDS_Value, thisValue.Thermo_Value, name);
    }, 10000);
  }

  const submitValue = async (tds, temperature, name) => {
    console.log(tds, temperature, name);
    const myData = {
      TDS_Value: tds,
      Thermo_Value: temperature,
      Location: name,
    };

    await fetch(
      "https://embedded-lab-backend-andew-production.up.railway.app/api/createFire",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(myData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Success: ", data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
          <span className="blue_gradient">Water Quality Website</span>
        </h1>
        <p className="desc text-center">
          Measuring TDS and Temperature of water using STM32 with NodeMCU
        </p>
      </section>
      <hr className="mb-8 mt-6 border-white"></hr>
      <section className="w-full flex-center flex-row">
        <NumberCircle number={tds} description="TDS" />
        <NumberCircle number={temperature} description="Temperature" />
      </section>

      <section className="w full flex-center mt-8 rounded-xl input-group text-center">
        <input
          type="text"
          id="waterSourceName"
          placeholder="Water Source Name"
          className="border-1 border-black pt-1 pb-2 px-2 text-center"
        />
      </section>
      <section className="w-full flex-center mt-4 mb-10">
        {!isLoading && (
          <button
            class="rounded-full bg-black hover:bg-blue-950 active:bg-gray-300 transition duration-150 ease-in-out pt-2 pb-2.5 px-5 text-white font-bold"
            onClick={getValue}
          >
            Start Measure
          </button>
        )}
        {isLoading && (
          <button class="rounded-full bg-black hover:bg-blue-950 active:bg-gray-300 transition duration-150 ease-in-out pt-2 pb-2.5 px-5 text-white font-bold">
            Loading...
          </button>
        )}
      </section>
    </div>
  );
};

export default Home;
