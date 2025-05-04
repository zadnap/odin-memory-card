import styles from '@/styles/MenuModal.module.scss';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

function MenuModal({
  title,
  numberOfPokemon,
  setNumberOfPokemon,
  setOpenModal,
}) {
  const [count, setCardCount] = useState(numberOfPokemon);

  const handleSave = () => {
    const parsedCount = parseInt(count, 10);

    if (Number.isInteger(parsedCount) && parsedCount > 12 && parsedCount <= 100)
      setNumberOfPokemon(parsedCount);
    setOpenModal(false);
  };

  return (
    <div className={styles.menuModal}>
      <div className={styles.container}>
        <div className={styles.head}>
          <h1 className={styles.title}>{title}</h1>
          <button
            className={styles.closeBtn}
            aria-label="Close MenuModal"
            onClick={() => setOpenModal(false)}
          >
            <FontAwesomeIcon icon={faX} />
          </button>
        </div>
        <div className={styles.body}>
          <p className={styles.formItem}>
            <label htmlFor="cardCount">Card</label>
            <input
              id="cardCount"
              type="text"
              placeholder="Number must be between 12 and 100"
              value={count}
              onChange={(e) => setCardCount(e.target.value)}
            />
          </p>
          <p className={styles.formItem}>
            <label>Rule</label>
            <p>
              Do not select a same card twice. Try your best reach the highest
              score possible.
            </p>
          </p>
        </div>
        <div className={styles.foot}>
          <button onClick={() => setOpenModal(false)}>Cancel</button>
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default MenuModal;
