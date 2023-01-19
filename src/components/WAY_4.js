import React, { useContext } from "react";
import { createContext, useState } from "react";
//
const stadiumContext = createContext("stdm-1");
const rainContext = createContext();
//
export default function Way_3() {
  const [rain, setRain] = useState("Not Raining");
  const [stadium, setStadium] = useState("");
  return (
    <div className="bg-primary bg-opacity-10 mx-4 rounded p-1 shadow-lg  my-4">
      <h5 className="text-danger ms-5 ">
        useContext + Context.Provider
      </h5>
      <strong>Change Parent values to see effect: </strong>
      <input
        type="checkbox"
        onClick={(e) => {
          if (e.target.checked) {
            setRain("Raining");
          } else {
            setRain("Not Raining");
          }
        }}
      />
      Raining
      <input
        type="text"
        placeholder="Stadium Name"
        className="form-control form-control-sm w-50 mb-3"
        onChange={(e) => setStadium(e.target.value)}
      />
      <rainContext.Provider value={rain}>
        <stadiumContext.Provider value={stadium}>
          <A />
          <B />
        </stadiumContext.Provider>
      </rainContext.Provider>
      <strong>Note:</strong>
      <ul>
        <li>useContext eases consuming context values</li>
      </ul>
    </div>
  );
}

function A() {
  const rain = useContext(rainContext);
  const stadium = useContext(stadiumContext);

  return (
    <div className=" ">
      <span>
        <strong>A: </strong> {rain} at {stadium} ...
      </span>
    </div>
  );
}

function B() {
  const rain = useContext(rainContext);
  const stadium = useContext(stadiumContext);

  return (
    <div className=" ">
      <span>
        <strong>B: </strong> {rain} at {stadium} ...
      </span>
      <C />
    </div>
  );
}

function C() {
  const rain = useContext(rainContext);
  const stadium = useContext(stadiumContext);

  return (
    <span>
      <strong className="ms-3">C: </strong> {rain} at {stadium} ...
    </span>
  );
}
