import Layout from "../Layout";
import "./index.scss"

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
}) => {
  // console.log(emojis);
  // console.log(currentEmoji);

  let currentEmojiData = emojis.find((emoji) => emoji.id === currentEmoji);

  return (
    // <Layout title={false}>
    <>
      <SectionHeader title={title} subtitle={subtitle} year={year} />
      <Grid emojis={emojis} currentEmoji={currentEmoji} grid={grid}></Grid>
      </>
    // </Layout>
  );
};

export default Section;
