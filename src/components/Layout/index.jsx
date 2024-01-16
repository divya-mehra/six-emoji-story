import "./base.scss";

const Layout = ({ children, title }) => {
  return (
    <>
      {title ? (
        <div className="container title-page">{children}</div>
      ) : (
        <div className="container section-area">{children}</div>
      )}
    </>
  );
};

export default Layout;
