import Layout from "../Layout";
import Transition from "../Transition";
import "./index.scss";

const TitlePage = ({ emojis }) => {
  return (
    <>
    <Layout title={true}>
      <div className="half-column main-title">
        <div>Six</div>
        <div>Emoji</div>
        <div>Story</div>
      </div>
      <div className="half-column flex-column">
        <div className="flex-column title-page-all-text ">
            
        {emojis.map((e) => {
          return (
            <div className="flex title-page-text">
              <h3>{e.year}</h3>
              <h3 className="title-page-title">{e.title}</h3>
            </div>
          );
        })}
      </div>
      </div>
      
    </Layout>
    <Transition id={-1} currentColor={"white"} emojis={emojis}/>
    </>
  );
};

export default TitlePage;
