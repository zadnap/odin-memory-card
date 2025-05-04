import styles from '@/styles/Card.module.scss';

function Card({ onClick, imgSrc, name }) {
  return (
    <div className={styles.card} onClick={onClick}>
      <img className={styles.image} src={imgSrc} alt="" />
      <p className={styles.name}>{name}</p>
    </div>
  );
}

export default Card;
