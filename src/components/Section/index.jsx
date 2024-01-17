import Layout from "../Layout";
import "./index.scss";

import Grid from "../Grid";
import Text from "../Text";
import { SectionHeader } from "../Headlines";
import { useState, useRef } from "react";

const Section = ({
  emojis,
  currentEmoji,
  setCurrentEmoji,
  title,
  year,
  subtitle,
  id,
  grid,
  color,
}) => {
  // console.log(emojis);
  

  return (
    
    <div className="section-background" style={{ backgroundColor: color }}>
      <div className="flex individual-section">
        <div className="half-column">
          <Grid emojis={emojis} color={color} currentEmoji={currentEmoji} grid={grid}></Grid>
        </div>
        <div className="half-column flex-column all-text">
          <SectionHeader title={title} subtitle={subtitle} year={year} />
          <Text/>
        </div>
      </div>
    </div>
    
  );
};

export default Section;
