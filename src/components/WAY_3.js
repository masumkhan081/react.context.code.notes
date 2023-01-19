import React from "react";
import { createContext, useState } from "react";
//
const stadiumContext = createContext("stdm-1");
const rainContext = createContext();
//
export default function Way_3() {
  const [rain, setRain] = useState("Not Raining");
  const [stadium, setStadium] = useState("");
  return (
    <div className="bg-primary bg-opacity-10 mx-4 rounded-3 p-1 shadow mt-4">
      <h5 className="text-danger ms-5">Nested: Context.Provider + Consumer</h5>
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
          <div>
            <A />
          </div>
          <div>
            <B />
          </div>
          <div>
            <C />
          </div>
        </stadiumContext.Provider>
      </rainContext.Provider>
      <ul>
        <li className="list-unstyled text-success">Notes:</li>
        <li>
          Using consumer is bad, as long as readability is concerned ( nested
          prvdr & cnsmr )
        </li>
        <li>useContext is far better solution</li>
      </ul>
    </div>
  );
}

class A extends React.Component {
  render() {
    return (
      <rainContext.Consumer>
        {(rain) => {
          return (
            <stadiumContext.Consumer>
              {(stadium) => {
                return (
                  <span>
                    <strong>A: </strong> {rain} at stadium: {stadium} ...
                  </span>
                );
              }}
            </stadiumContext.Consumer>
          );
        }}
      </rainContext.Consumer>
    );
  }
}
class B extends React.Component {
  static contextType = stadiumContext;
  render() {
    return (
      <rainContext.Consumer>
        {(rain) => {
          return (
            <stadiumContext.Consumer>
              {(stadium) => {
                return (
                  <span>
                    <strong>B: </strong> {rain} at stadium: {stadium} ...
                  </span>
                );
              }}
            </stadiumContext.Consumer>
          );
        }}
      </rainContext.Consumer>
    );
  }
}

class C extends React.Component {
  static contextType = stadiumContext;
  render() {
    return (
      <rainContext.Consumer>
        {(rain) => {
          return (
            <stadiumContext.Consumer>
              {(stadium) => {
                return (
                  <span>
                    <strong>C: </strong> {rain} at stadium: {stadium} ...
                  </span>
                );
              }}
            </stadiumContext.Consumer>
          );
        }}
      </rainContext.Consumer>
    );
  }
}
