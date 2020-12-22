import React, { useState } from "react";
import ReactDOM from "react-dom";

const useInput = (initiaValue,validator) => {
  const [value, setvalue] = useState(initiaValue);
  const onChange = event => {
    const {
      target : {value}
    } = event;
    let willUpdate = true;
    if(typeof validator === "function"){
      willUpdate = validator(value);
    }
    if(willUpdate){
      setvalue(value);
    }
  };
  return { value, onChange };
}

const App = () => {
  const maxLen = value => value.length < 10;
 // const valname = value => value.inclues("@");
  const name = useInput("Ms.Dakyung",maxLen);

  return (
    <div className="App">
      <input placeholder="Name" {...name}/> 
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
