import Layout from "../Layout";
import "./index.scss";

const TitlePage = ({ emojis }) => {
  return (
    <Layout title={true}>
<div className="half-column">
hi
</div>
      <div className="flex-column title-page-all-text half-column">
        {emojis.map((e) => {
          return (
            <div className="flex title-page-text">
              <h3>{e.year}</h3>
              <h3 className="title-page-title">{e.title}</h3>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default TitlePage;
