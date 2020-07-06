import React from "react";
import { CharacterType } from "../Apis/BreakingBadApi";
import CharacterCard from "./CharacterCard";

interface Props {
  isLoading: boolean;
  characters: CharacterType[]
}

const CharacterList: React.FC<Props> = ({ isLoading, characters }) => {
  return (
    <section className="cards">
      {isLoading
      ?<h1>Loading...</h1>
      :characters.map(c=>(<CharacterCard key={c.char_id} character={c}/>))}
    </section>
  );
};

export default CharacterList;
