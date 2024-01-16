import TitlePage from "./components/TItlePage";
import Section from "./components/Section";
import emojis from "./data/emojiData"


function App() {

  const [currentEmoji, setCurrentEmoji] = useState(null);

  return (
    <>
    <TitlePage/>
    <Section emojis={emojis} currentEmoji={currentEmoji} setCurrentEmoji={setCurrentEmoji} />
    </>
  )
}

export default App
