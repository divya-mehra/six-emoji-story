import "./index.scss";
import { useInView } from "react-intersection-observer";

const Transition = ({ currentColor, start, id, emojis }) => {
  let nextColor;
  let prevColor;
  let selectedColor;

  let nextEmoji = id + 1;

  if (id < 5) {
    nextColor = emojis[nextEmoji].color;
    console.log(nextColor);
  } else {
    nextColor = "white";
  }
  
  let prevEmoji = id-1;
  if (id>0) {
    prevColor = emojis[prevEmoji].color;
  } else {
    prevColor = "white"
  };

  if(start) {
    selectedColor = prevColor;
  } else {
    selectedColor = nextColor;
  }




  //make cells at the bottom of grid for transition
  const cellArr = [];

  for (let i = 1; i <= 40; i++) {
    cellArr.push({ id: i });
  }

  // check if in view
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  return (
        <div className="flex">
          {cellArr.map((i) => (
            <div key={i.id} className="cell" style = {{backgroundColor: (i.id%2==0) ? currentColor : selectedColor }}
            ></div>
          ))}
        </div>
      
  );
};

export default Transition;
