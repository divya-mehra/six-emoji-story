import { useEffect, useState } from "react";
import "./index.scss";

const TransitionCell = ({id, currentColor, nextColor}) => {
  const [color, setColor] = useState(currentColor);
  console.log(`next color for ${id} is ${nextColor}` )

  useEffect(() => {
    setColor(currentColor)
    let delay = Math.random() * 1500;
    setTimeout(() => {
      setColor(nextColor);
    }, delay);
  }, []);

  return <div className="cell" style={{ backgroundColor: color }}></div>;
};

export default TransitionCell;
