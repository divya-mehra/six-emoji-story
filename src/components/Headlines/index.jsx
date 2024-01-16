import "./index.scss"

export const SectionHeader = ({ title, subtitle, year }) => {
  return (
    <div className="flex-column">
      <div className="flex">
        <h3 className="section-year">{year}</h3>
        <h2 className="section-title"> {title} </h2>
      </div>
      <h5 className="section-subtitle"> {subtitle} </h5>
    </div>
  );
};
