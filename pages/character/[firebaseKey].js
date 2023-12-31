/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import SpellCard from '../../components/SpellCard';
import { getCharacterSpells } from '../../api/mergedData';
import Search from '../../components/Search';
import MenuDropUp from '../../components/MenuDropUp';

export default function ViewCharacter() {
  const [spells, setSpells] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [character, setCharacter] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;
  const getAllCharacterSpells = () => {
    getCharacterSpells(firebaseKey).then((data) => {
      setSpells(data.spellArry);
      setSearchResults(data.spellArry);
      setCharacter(data.characterObj);
    });
  };

  useEffect(() => {
    getAllCharacterSpells();
  }, [firebaseKey]);
  return (
    <div>
      <div className="spell-link-btn">
        <h1>Prepared Spells</h1>
        <MenuDropUp firebaseKey={firebaseKey} characterObj={character} />
      </div>
      <Search contents={spells} setSearchResults={setSearchResults} />
      {character.favorite ? null : <h3>There are currently no Prepared/Favorited spells go to Menu and then Known spells</h3>}
      {searchResults?.map((spell) => (
        <SpellCard key={spell.name} spellObj={spell} characterObj={character} setCharacter={setCharacter} onUpdate={getAllCharacterSpells} />
      ))}
    </div>
  );
}
