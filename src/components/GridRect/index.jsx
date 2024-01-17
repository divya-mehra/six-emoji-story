import { useState, useEffect, useRef } from "react";
import "./index.scss";

const GridRect = ({ id, currentEmoji, color, emojiColor, emojis, grid }) => {
  let light = "#f1f1f1";

  const [fill, setFill] = useState(null);
  const [border, setBorder] = useState("transparent")
  
  useEffect(() => {
    if (grid.includes(id)) {
      let delay = Math.random() * 1000;
      setInterval(() => {
        setFill(emojiColor);
        setBorder("white")
      }, delay);
    } else {
      setFill("transparent");
    }
  }, []);

  return (
    <div
      className="gridRect"
      style={{ border: `0.5px ${border} solid`, backgroundColor: fill }}
    ></div>
  );
};

export default GridRect;
