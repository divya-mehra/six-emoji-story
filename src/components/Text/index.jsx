import "./index.scss";

const Text = ({ id, content }) => {
  console.log();

  // this has text and annotations

  return (
    <div className="gridded-section">
      {content.map((item, index) => (
        
        <div className="body-text" key={index}>
            <div className="text" style={{gridColumn: "2 / 7"}} >
            {item.text}
            </div>
            <div className="annotation-text" key={index}>
            {item.annotation}
          </div>
        </div>
          

      ))}
    </div>
  );
};

export default Text;
