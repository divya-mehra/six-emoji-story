import "./index.scss";
import GridRect from "../GridRect";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import GridInterface from "../GridInterface";

const Grid = ({ emojis, grid, currentEmoji, color, emojiColor }) => {
  const [gridInView, setGridInView] = useState(false);
  const [debouncedInView, setDebouncedInView] = useState(false);

  // check if in view
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  // Debounce function
  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  // Debounced version of setDebouncedInView
  const debouncedSetInView = debounce((value) => {
    setDebouncedInView(value);
  }, 300); // Adjust the delay as needed

  // Update debouncedInView when inView changes
  useEffect(() => {
    debouncedSetInView(inView);
  }, [inView, debouncedSetInView]);

  // Update the gridInView state when debouncedInView changes
  useEffect(() => {
    setGridInView(debouncedInView);
  }, [debouncedInView]);

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
