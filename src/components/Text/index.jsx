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
            {item.annotation && item.annotation.length > 0 && (<div className="annotation-text annotation" key={index}>
            {item.annotation.map((annotation, annotationIndex) => (
              <div key={annotationIndex}>{annotation}</div>
            ))}
            
          </div>
            )}
        </div>
          

      ))}
    </div>
  );
};

export default Text;
