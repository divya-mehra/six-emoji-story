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
  sectionTitle,
  id,
  grid,
  color,
}) => {
  // console.log(emojis);
  // console.log(currentEmoji);

  return (
    
    <div className="section-background" style={{ backgroundColor: color }}>
      <div className="flex individual-section">
        <div className="half-column">
          <Grid emojis={emojis} color={color} currentEmoji={currentEmoji} grid={grid}></Grid>
        </div>
        <div className="half-column flex-column">
          <SectionHeader title={sectionTitle} subtitle={subtitle} year={year} />
        </div>
      </div>
    </div>
    
  );
};

export default Section;
