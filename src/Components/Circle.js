import React, { useContext } from "react";
import { Context } from "../App";
import "./Circle.css";
function Circle(props) {
  return (
    <span
      className="dot"
      id={"i" + props.index}
      style={{
        height: context.sizes[props.index],
        width: context.sizes[props.index],
      }}
      onClick={() => {
        context.dispatch({
          index: props.index,
          prevIndex: context.prevIndex,
          setPrevIndex: context.setPrevIndex,
        });
        console.log("Clicked");
      }}
    ></span>
  );
}

export default React.memo(Circle);
