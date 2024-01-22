import "./index.scss";
import GridRect from "../GridRect";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import GridInterface from "../GridInterface";

const Grid = ({ emojis, grid, currentEmoji, color, emojiColor }) => {
  const [gridInView, setGridInView] = useState(false);

  // check if in view
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  // make the grid

  const divArr = [];

  for (let i = 1; i <= 144; i++) {
    divArr.push({ id: i });
  }

  return (
    <div className="gridContainer">
      <div className="gridParent">
        <div className="grid" ref={ref}>
          {inView &&
            divArr.map((i) => {
              return (
                <GridRect
                  key={i.id}
                  id={i.id}
                  currentEmoji={currentEmoji}
                  color={color}
                  emojiColor={emojiColor}
                  grid={grid}
                />
              );
            })}
        </div>
        {/* <GridInterface /> */}
      </div>
    </div>
  );
};

export default Grid;
