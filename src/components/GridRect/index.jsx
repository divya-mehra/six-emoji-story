import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import "./index.scss";

const GridRect = ({ id, currentEmoji, color, emojis, grid }) => {
  let light = "#f1f1f1";

  const [fill, setFill] = useState(null);
  
  useEffect(() => {
    if (grid.includes(id)) {
      let delay = Math.random() * 1000;
      setInterval(() => {
        setFill(light);
      }, delay);
    } else {
      setFill("transparent");
    }
  }, []);

  return (
    <div
      className="gridRect"
      style={{ border: `0.5px ${color} solid`, backgroundColor: fill }}
    ></div>
  );
};

export default GridRect;
