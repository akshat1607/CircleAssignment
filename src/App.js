import React, { useState, useReducer, useContext } from "react";
import "./App.css";
import "./Components/Circle.css";

import Circle from "./Components/Circle";
import Reducer from "./Components/Reducer";
import Initialise from "./Components/Initialise";

export const Context = React.createContext();

function App() {
  console.log("app renders")
  var n = 5;
  const { initialSizes, sizesArray } = Initialise(n);
  var i = 0;
  const [sizes, dispatch] = useReducer(Reducer, initialSizes);
  const [prevIndex, setPrevIndex] = useState(-1);
  console.log(initialSizes)
  console.log(sizes)
  
  return (
    <Context.Provider
      value={{
        dispatch: dispatch,
        prevIndex: prevIndex,
        setPrevIndex: setPrevIndex,
        sizes: sizes,
      }}
    >
      <div className="App">
        {sizesArray.map((size) => {
          return (
            <Circle 
            radius={String(size) + "px"} 
            key={i} 
            index={i++}>  
            </Circle>
          );
        })}
      </div>
    </Context.Provider>
  );
}

export default App;
