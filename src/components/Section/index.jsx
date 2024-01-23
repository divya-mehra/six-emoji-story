import Layout from "../Layout";
import "./index.scss";

import Grid from "../Grid";
import { SectionHeader } from "../Headlines";
import Text from "../Text";
import Transition from "../Transition";
import { useState, useRef } from "react";
import ImageWithCaption from "../ImageWIthCaption";

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
  content,
  images,
  annotations,
}) => {
  // console.log(emojis);

  let gridHeight = "100%";

  return (
    <div className="section-background" style={{ backgroundColor: color }}>
      {/* <Transition start={true} currentColor={color} id={id} emojis={emojis}/> */}
      <div className="flex individual-section" data-panel-number={number}>
        <div className="half-column">
          <div className="gridArea" style={{ height: gridHeight }}>
            <Grid
              emojis={emojis}
              color={color}
              currentEmoji={currentEmoji}
              emojiColor={emojiColor}
              grid={grid}
            ></Grid>
          </div>
        </div>
        <div className="half-column gridded-column">
          <SectionHeader title={title} subtitle={subtitle} year={year} />
          <Text id={id} content={content} />
        </div>
      </div>
      {/* <Transition start={false} currentColor={color} id={id} emojis={emojis}/> */}
      <div className="gridded-images">
        <div className=" image-left ">
          {images.length > 0 &&
            images.map((item, index) => {
              if (index % 2 === 0) {
                return (
                  <ImageWithCaption
                    key={index}
                    path={item.path}
                    caption={item.caption}
                  />
                );
              }
              return null; // Render nothing for even indexes in the right column
            })}
        </div>
        <div className=" image-right">
          {images.length > 0 &&
            images.map((item, index) => {
              if (index % 2 !== 0) {
                return (
                  <ImageWithCaption
                    key={index}
                    path={item.path}
                    caption={item.caption}
                  />
                );
              }
              return null; // Render nothing for even indexes in the right column
            })}
        </div>
      </div>
    </div>
  );
};

export default Section;
