import React, { useState } from "react";
import ReactDOM from "react-dom";

// uset State 기본
const App = () => {
  const [item, setItem] = useState(1);
  const incrementitem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);

  return (
    <div className="App">
      <h1>hello {item} </h1>
      <h2>Start!</h2>
      <button onClick={incrementitem}> incre </button>
      <button onClick={decrementItem}> decrement </button>
     
    </div>
  );
};

// value={name.value} 대신에 {...name} 도 가능

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
