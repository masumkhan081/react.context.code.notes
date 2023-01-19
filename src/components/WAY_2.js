import React from "react";
import { createContext, useState } from "react";
//
const nameContext = createContext();
//
export default function Way_2() {
  const [textData, setTextData] = useState("");
  return (
    <div className="mx-4 rounded-3 p-1 shadow mt-4">
      <h5 className="text-danger ms-5 ">Context.Provider + contextType</h5>
      <strong> Write On Parent: </strong>
      <input
        type="text"
        className="form-control form-control-sm w-50 mb-3"
        onChange={(e) => setTextData(e.target.value)}
      />
      <nameContext.Provider value={{ text: textData }}>
        <MiddleComponent />
      </nameContext.Provider>
    </div>
  );
}
function MiddleComponent() {
  // This middle component dosn't have to pass anything, know anything (props)
  return (
    <>
      <A />
      <B />
      <C />

      <ul>
        <li className="list-unstyled text-success">Notes:</li>
        <li>One class can subscribe to only one contextType</li>
        <li>ContextType only works with class cmpnt</li>
      </ul>
    </>
  );
}
class A extends React.Component {
  // reading the context
  static contextType = nameContext;
  render() {
    return (
      <div className=" ">
        <strong>Child Component A: </strong>
        {this.context.text}
      </div>
    );
  }
}
class B extends React.Component {
  // reading the context
  static contextType = nameContext;
  render() {
    return (
      <div className=" ">
        <strong>Child Component B: </strong>
        {this.context.text}
      </div>
    );
  }
}
class C extends React.Component {
  // reading the context
  static contextType = nameContext;
  render() {
    return (
      <div className=" ">
        <strong>Child Component C: </strong>
        {this.context.text}
      </div>
    );
  }
}
