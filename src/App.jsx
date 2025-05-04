import { useEffect, useState } from 'react';
import styles from './App.module.scss';
import BoardItem from './components/BoardItem';
import Card from './components/Card';
import Title from './components/TItle';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [numberOfPokemon, setNumberOfPokemon] = useState(12);

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
    }

    fetchPokemonData();
  }, [numberOfPokemon]);

  return (
    <div className={styles.app}>
      <Title>MEMORY CARD GAME</Title>
      <div className={styles.scoreBoard}>
        <BoardItem title="Score" content="14" />
        <BoardItem title="Best Score" content="23" />
        <BoardItem title="Time" content="01:23" />
      </div>
      <div className={styles.cardDeck}>
        {pokemonList.map((pokemon) => (
          <Card key={pokemon.id} imgSrc={pokemon.imgSrc} name={pokemon.name} />
        ))}
      </div>
    </div>
  );
}

export default App;
