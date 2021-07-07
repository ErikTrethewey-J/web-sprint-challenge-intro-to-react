import React, { useState, useEffect } from 'react';
import './App.css';
import Character from "./components/Character"
import axios from 'axios'
import styled from 'styled-components'

const CharacterList = styled.div`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      color: blue;
`


function App() {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(res => {
        setCharacters(res.data.results)
      })
  }, [])


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <CharacterList>
        <Character characters={characters} />
      </CharacterList>
    </div>
  );
}

export default App;
