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
  // console.log(currentEmoji);

  let currentEmojiData = emojis.find((emoji) => emoji.id === currentEmoji);

  return (
    // <Layout title={false}>
    <div className="section-background" style={{backgroundColor: color}}>
        <div className=" flex individual-section">
      <div className="half-column">
        <Grid emojis={emojis} currentEmoji={currentEmoji} grid={grid}></Grid>
      </div>
      <div className="half-column">
        <SectionHeader title={title} subtitle={subtitle} year={year} />
      </div>
      </div>
    </div>
    // </Layout>
  );
};

export default Section;
