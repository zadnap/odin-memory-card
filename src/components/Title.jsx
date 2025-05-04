import styles from '@/styles/Title.module.scss';

function Title({ children }) {
  return <h1 className={styles.title}>{children}</h1>;
}

export default Title;
