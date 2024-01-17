import "./index.scss";

export const SectionHeader = ({ title, subtitle, year }) => {
  console.log(title);
  return (
    <div className="flex-column section-header">
      {/* <h3 className="section-year">{year}</h3> */}
      <h2 className="section-title"> {title} </h2>

      <h5 className="section-subtitle"> {subtitle} </h5>
    </div>
  );
};
