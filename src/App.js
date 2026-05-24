import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetches = [];
    for (let i = 1; i <= 9; i++) {
      fetches.push(fetch('https://pokeapi.co/api/v2/pokemon/' + i).then(res => res.json()));
    }
    Promise.all(fetches).then(results => setPokemon(results));
  }, []);

  return (
    <div className="App">
      <h1>Test</h1>
      <div className='pokemons-div'>
        {pokemon.map((p) => (
          <p key={p.id}>{p.name}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
