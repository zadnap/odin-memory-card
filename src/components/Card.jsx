import styles from '@/styles/Card.module.scss';

function Card({ imgSrc, name }) {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={imgSrc} alt="" />
      <p className={styles.name}>{name}</p>
    </div>
  );
}

export default Card;
