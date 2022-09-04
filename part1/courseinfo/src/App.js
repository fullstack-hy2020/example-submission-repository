import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";
const App = () => {
  // const [left, setLeft] = useState(0);
  // const [right, setRight] = useState(0);
  // const [allClicks, setAllClicks] = useState([]);

  // const handleLeft = () => {
  //   setAllClicks(allClicks.concat("Left"));
  //   setLeft(left + 1);
  // };

  // const handleRight = () => {
  //   setAllClicks(allClicks.concat("Right"));

  //   setRight(right + 1);
  // };

  return (
    <div>
      {/* <button onClick={() => console.log(`Clicked`)}>Click Me!</button> */}
      <Header />
      <Content />
      <Total />
      {/* <button onClick={handleLeft}>left: {left}</button>
      <button onClick={handleRight}>right: {right}</button>
      <h1>All Clicks:{allClicks.length}</h1>

      <p>{allClicks.join(" ")}</p> */}
    </div>
  );
};

export default App;
