import { useEffect, useState } from "react";
import "./index.scss";

const TransitionCell = (id, currentColor, nextColor) => {
  const [color, setColor] = useState("white");

  useEffect(() => {
    let delay = Math.random() * 2000;
    setTimeout(() => {
      setColor("blue");
    }, delay);
  }, []);

  return <div className="cell" style={{ backgroundColor: color }}></div>;
};

export default TransitionCell;
