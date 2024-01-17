import "./index.scss"
import GridRect from "../GridRect";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const Grid = ({emojis, grid, currentEmoji, color}) => {

    const [gridInView, setGridInView] = useState(false);

    // check if in view
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.5,
      });

    //   useEffect(() => {
    //     if (inView) {
    //       // Parent component is in view, start your logic
    //     //   setGridInView(true)
          
    //     }
    //   }, [inView]);


    // make the grid

    const divArr = [];

    for (let i = 1; i <= 144; i++) {
        divArr.push({ id: i });
      }


    return ( 
    
    <div className="grid" ref={ref}>
        {inView && divArr.map((i) => {
            return(
                <GridRect
                key={i.id}
                id={i.id}
                currentEmoji={currentEmoji}
                color={color}
                grid={grid}
                />
            )
            })}
    
    </div> );
}
 
export default Grid;