import React from 'react'
import styled from "styled-components";

const CharacterCards = styled.div`
      border: 3px solid black;
      padding-top: 2%;
      margin: 5% 0%;
`

export default function CharacterCard(props) {

  const { character } = props;
  console.log(props)
  return (
    <CharacterCards>
    <div>
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <p>{character.gender}</p>
      <p>{character.origin.name}</p>
      <p>{character.species}</p>
      <p>{character.status}</p>
    </div>
    </CharacterCards>
  )
}
