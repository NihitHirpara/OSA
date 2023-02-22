import styles from "./Card.scss";
import '../auth/index.css'

const Card = ({ children, cardClass }) => {
  return <div className={`card ${cardClass}`}>{children}</div>;
};

export default Card;
