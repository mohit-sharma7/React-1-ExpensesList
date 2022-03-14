import "./Card.css";

const Card = (prop) => {
  const className = "card " + prop.className;
  return <div className={className}>{prop.children}</div>;
};

export default Card;
