import "./ArticleButton.css";

export default function ArticlesButton({ name, link, styles }) {
  return (
    <button className="button-class" style={styles}>
      {name}
    </button>
  );
}
