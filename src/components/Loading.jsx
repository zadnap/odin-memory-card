import styles from '@/styles/Loading.module.scss';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Loading() {
  return (
    <div className={styles.loading}>
      <FontAwesomeIcon icon={faSpinner} />
      <p>Loading...</p>
    </div>
  );
}

export default Loading;
