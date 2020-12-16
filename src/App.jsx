import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
  {
    title: "What is React?",
    content: "React is a frontend js library",
  },
  {
    title: "Why use React?",
    content: "Because is a favorite js library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const App = () => {
  return (
    <div>
      <br />
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
};

export default App;
