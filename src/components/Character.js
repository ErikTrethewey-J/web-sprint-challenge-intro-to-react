// Write your Character component here
import React from 'react'
import CharacterCard from "./CharacterCard"
import styled from "styled-components"

// const 

export default function CharacterList(props) {

  const {characters} = props;
  return (
    <div>
    {characters.map(character => {
      return <CharacterCard key={character.id} character={character}/>
    })}
    </div>
  )
}