import "./index.scss";
import { SectionHeader } from "../Headlines";

const Text = ({id, content}) => {

  console.log()

  return (
    <div className="body-text">
      

      {content.map((item, index) => (
        <div className="text" key={index}>{item}</div>
      ))}
      </div>
      
    
  );
};

export default Text;
