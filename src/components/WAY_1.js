import React from "react";
import { createContext, useState } from "react";
//
const rainContext = createContext();
//import rainContext from "./Context"; {/*  Being imported makes more sense*/ }
//
export default function Way_1() {
  const [rain, setRain] = useState(false);
  const d = "??";
  return (
    <div className="mx-4 rounded-3 p-1 shadow mt-4">
      <div>
        <h5 className="text-danger ps-5">
          Context.Provider + Context.Consumer
        </h5>
        <strong>Parent Component: </strong>
        <input type="checkbox" onClick={(e) => setRain(e.target.checked)} />
        Raining
      </div>
      <rainContext.Provider value={(rain )}>
        <div>
          <strong>Child Component A: </strong>
          <A />
        </div>
        <div>
          <strong>Child Component B: </strong>
          <B />
        </div>
        <div>
          <strong>Child Component C: </strong>
          <C />
        </div>
      </rainContext.Provider>
    </div>
  );
}

function A() {
  return (
    <rainContext.Consumer>
      {
        //   render based on the value
        (rain) =>
          rain ? (
            <span >
              As it's <strong>raining</strong>, Bring cover on field
            </span>
          ) : (
            <span>
              As it's <strong>not raining</strong>, Remove cover from field
            </span>
          )
      }
    </rainContext.Consumer>
  );
}
function B() {
  return (
    <rainContext.Consumer>
      {(rain) =>
        rain ? (
          <span>
            As it's <strong>raining</strong>, Game is Off
          </span>
        ) : (
          <span>
            As it's <strong>not raining</strong>, Game is On
          </span>
        )
      }
    </rainContext.Consumer>
  );
}
function C() {
  return (
    <rainContext.Consumer>
      {(rain) =>
        rain ? (
          <span>
            As it's <strong>raining</strong>, Close the gallery entrance
          </span>
        ) : (
          <span>
            As it's <strong>not raining</strong>, Open the gallery entrance
          </span>
        )
      }
    </rainContext.Consumer>
  );
}
