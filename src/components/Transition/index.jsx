import "./index.scss";
import { useInView } from "react-intersection-observer";

const Transition = ({ currentColor, start, id, emojis }) => {
  let nextColor;
  let prevColor;

  let nextEmoji = id + 1;

  if (id < 5) {
    nextColor = emojis[nextEmoji].color;
    console.log(nextColor);
  } else {
    nextColor = "white";
  }
  console.log(nextColor);
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
    <>
      {Array.from({ length: 1 }).map((_, index) => (
        <div key={index} className="flex">
          {cellArr.map((i) => (
            <div key={i.id} className="cell"></div>
          ))}
        </div>
      ))}
    </>
  );
};

export default Transition;
