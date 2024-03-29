import Layout from "../Layout";
import Transition from "../Transition";
import "./index.scss";

const TitlePage = ({ emojis }) => {
  const moveToSection = (e) => {
    
    const clickedChapterNumber = e.currentTarget.getAttribute("data-number");
    
    const targetPanel = document.querySelector(
      `[data-panel-number="${clickedChapterNumber}"]`
    );
    console.log(targetPanel);

    if (targetPanel) {
      targetPanel.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Layout title={true}>
        <div className="half-column main-title flex-column">
          <div className="title-div" >6<span className="emoji-letter">o</span><span>Six</span></div>
          <div className="title-div">Em<span className="emoji-letter">o</span>ji</div>
          <div className="title-div">St<span className="emoji-letter">o</span>ry</div>
        </div>
        <div className="half-column flex-column">
          <div className="flex-column title-page-all-text ">
            {emojis.map((e) => {
              return (
                <div
                  className="flex title-page-text"
                  onClick={moveToSection}
                  data-number={e.id}
                >
                  <h3 className="title-page-year">{e.year}</h3>
                  <h3 className="title-page-title">{e.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
      {/* <Transition id={-1} currentColor={"white"} emojis={emojis}/> */}
    </>
  );
};

export default TitlePage;
