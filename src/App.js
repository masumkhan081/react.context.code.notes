//
//  tutorial src: codevolution, expensetracker-tvm, wds
//
import INTRO from "./components/INTRO";
import WAY_1 from "./components/WAY_1";
import WAY_2 from "./components/WAY_2";
import WAY_3 from "./components/WAY_3";
import WAY_4 from "./components/WAY_4";
/*
When we pass down (parent to childs) props, if it goes through other intermediate children
to the target child, that is problemsome to manage. children that doesn't need that props
unneccessary hold and pass down those props. Also same props can be used by many children
like a global variable in some sense. Here comes context -> parent component hold the values
and all child get's to use it from one place
*/

function App() {
  const obj = { name: "pokath khan", class: "third class" };
  //
  return (
    <div>
      {/* What this project about */}
      <INTRO />
      <WAY_1 />
      <WAY_2 />
      <WAY_3 />
      <WAY_4 />
    </div>
  );
}

export default App;
