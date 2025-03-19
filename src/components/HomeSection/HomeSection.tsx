import "./HomeSection.css";

export default function HomeSection({ id, header, subHeader, children }) {
  return (
    <section
      id={id}
      className="home-section flex-wrap home-section:flex-nowrap"
    >
      <div className="home-section-text">
        <p className="header">{header}</p>
        <p style={{ fontSize: "20px" }}>{subHeader}</p>
      </div>
      <div className="buttons-container">{children}</div>
    </section>
  );
}
