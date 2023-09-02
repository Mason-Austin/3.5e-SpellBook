/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
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
        <div className="rw">
          <Link passHref href={`/character/spell/${firebaseKey}`}>
            <Button>Known Spells</Button>
          </Link>
          <MenuDropUp firebaseKey={firebaseKey} />
        </div>
      </div>
      <Search contents={spells} setSearchResults={setSearchResults} />
      {searchResults?.map((spell) => (
        <SpellCard key={spell.name} spellObj={spell} characterObj={character} setCharacter={setCharacter} onUpdate={getAllCharacterSpells} />
      ))}
    </div>
  );
}
