import TitlePage from "./components/TItlePage";
import Section from "./components/Section";
import emojis from "./data/emojiData";
import Layout from "./components/Layout";

import { useState } from "react";

function App() {
  // const [currentEmoji, setCurrentEmoji] = useState(null);
  const [currentEmoji, setCurrentEmoji] = useState(0);

  return (
    <div className="page">
      <TitlePage emojis={emojis} />
      <Layout title={false}>
      {emojis.map((e) => {
        return (
          <Section
            key={e.id}
            id={e.id}
            emojis={emojis}
            currentEmoji={currentEmoji}
            setCurrentEmoji={setCurrentEmoji}
            year={e.year}
            title={e.sectionTitle}
            subtitle={e.subtitle}
            grid={e.grid}
            color={e.color}
          />
        );
      })}
      </Layout>
    </div>
  );
}

export default App;
