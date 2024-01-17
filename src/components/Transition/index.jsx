import "./index.scss";
import { useInView } from "react-intersection-observer";
import TransitionCell from "../TransitionCell";

const Transition = ({ currentColor, id, emojis }) => {
  let nextColor;
  let prevColor;

  let nextEmoji = id + 1;
  

  if (id < 5) {
    nextColor = emojis[nextEmoji].color;
    console.log(nextColor);
  } else {
    nextColor = "white";
  }

  //make cells at the bottom of grid for transition
  const cellArr = [];

  for (let i = 1; i <= 40; i++) {
    cellArr.push({ id: i});
  }

  // check if in view
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0,
  });


  return (
    <div ref={ref}>
        {inView &&  (
            <>
      {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="flex">
            {cellArr.map((i) => (
              <TransitionCell
                key={i.id}
                id={i.id}
                currentColor={currentColor}
                nextColor={nextColor}
              />
            ))}
          </div>
        ))}
    
    </>
  )}
  </div>)};

export default Transition;
