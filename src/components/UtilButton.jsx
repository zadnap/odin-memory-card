import styles from '@/styles/UtilButton.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function UtilButton({ onClick, icon }) {
  return (
    <button className={styles.utilButton} onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
}

export default UtilButton;
