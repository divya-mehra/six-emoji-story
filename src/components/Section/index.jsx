import Layout from "../Layout";
import "./index.scss";

import Grid from "../Grid";
import { SectionHeader } from "../Headlines";
import Text from "../Text";
import Transition from "../Transition";
import { useState, useRef } from "react";

const Section = ({
  emojis,
  currentEmoji,
  setCurrentEmoji,
  number,
  emojiColor,
  title,
  year,
  subtitle,
  id,
  grid,
  color,
}) => {
  // console.log(emojis);


  return (
    
    <div className="section-background" style={{backgroundColor: color}}>
        {/* <Transition start={true} currentColor={color} id={id} emojis={emojis}/> */}
      <div className="flex individual-section" data-panel-number={number}>
        <div className="half-column">
          <Grid emojis={emojis} color={color} currentEmoji={currentEmoji} emojiColor={emojiColor} grid={grid}></Grid>
        </div>
        <div className="half-column flex-column all-text" >
          <SectionHeader title={title} subtitle={subtitle} year={year} />
          <Text/>
        </div>
      </div>
      {/* <Transition start={false} currentColor={color} id={id} emojis={emojis}/> */}
    </div>
    
  );
};

export default Section;
