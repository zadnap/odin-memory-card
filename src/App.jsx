import { useEffect, useState } from 'react';
import styles from './App.module.scss';
import BoardItem from './components/BoardItem';
import Card from './components/Card';
import Title from './components/TItle';
import UtilButton from './components/UtilButton';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Loading from './components/Loading';
import MenuModal from './components/MenuModal';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [pokemonList, setPokemonList] = useState([]);
  const [numberOfPokemon, setNumberOfPokemon] = useState(12);
  const [selected, setSelected] = useState(new Set());
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  function getRandomPokemonIds(count, maxId = 1025) {
    const ids = new Set();
    while (ids.size < count) {
      ids.add(Math.floor(Math.random() * maxId) + 1);
    }
    return Array.from(ids);
  }

  useEffect(() => {
    async function fetchPokemonData() {
      const ids = getRandomPokemonIds(numberOfPokemon);
      const requests = ids.map((id) =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) =>
          res.json()
        )
      );
      const results = await Promise.all(requests);
      const data = results.map((pokemon) => ({
        id: pokemon.id,
        name: pokemon.name,
        imgSrc: pokemon.sprites.other['official-artwork'].front_default,
      }));
      setPokemonList(data);
      setIsLoading(false);
    }

    fetchPokemonData();
  }, [numberOfPokemon]);

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleChooseCard = (id) => {
    if (selected.has(id)) {
      setScore(0);
      setSelected(new Set());
      if (score > bestScore) {
        setBestScore(score);
      }
    } else {
      const newSelected = new Set(selected);
      newSelected.add(id);
      setSelected(newSelected);
      shuffleArray(pokemonList);
      setScore((prev) => prev + 1);
    }
  };

  return (
    <div className={styles.app}>
      <Title>MEMORY CARD GAME</Title>
      <div className={styles.buttonGroup}>
        <UtilButton icon={faBars} onClick={() => setOpenModal(true)} />
      </div>
      <div className={styles.scoreBoard}>
        <BoardItem title="Score" content={score} />
        <BoardItem title="Best Score" content={bestScore} />
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles.cardDeck}>
          {pokemonList.map((pokemon) => (
            <Card
              onClick={() => handleChooseCard(pokemon.id)}
              key={pokemon.id}
              imgSrc={pokemon.imgSrc}
              name={pokemon.name}
            />
          ))}
        </div>
      )}
      {openModal && (
        <MenuModal
          title="Menu"
          numberOfPokemon={numberOfPokemon}
          setNumberOfPokemon={setNumberOfPokemon}
          setOpenModal={setOpenModal}
        />
      )}
    </div>
  );
}

export default App;
