import styles from '@/styles/BoardItem.module.scss';

function BoardItem({ title, content }) {
  return (
    <div className={styles.boardItem}>
      <span>{title}</span>: <span>{content}</span>
    </div>
  );
}

export default BoardItem;
