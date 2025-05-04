import styles from './App.module.scss';
import BoardItem from './components/BoardItem';
import Title from './components/TItle';

function App() {
  return (
    <div className={styles.app}>
      <Title>MEMORY CARD GAME</Title>
      <div className={styles.scoreBoard}>
        <BoardItem title="Score" content="14" />
        <BoardItem title="Best Score" content="23" />
        <BoardItem title="Time" content="01:23" />
      </div>
    </div>
  );
}

export default App;
