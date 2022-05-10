import axios from 'axios'
import './App.css';
import {useState} from 'react'

function App() {
  const [responseData, setResponseData] = useState([])

  const fetchPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => {
        setResponseData(response.data.results);
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <div className="App">
      <button className='button' onClick={fetchPokemon}>Fetch Pokemon</button>
      <hr />
      <ol>
        {responseData.map((pokemon, idx) => {
          return <li key={idx}>{pokemon.name}</li>
        })}
      </ol>
    </div>
  );
}

export default App;
