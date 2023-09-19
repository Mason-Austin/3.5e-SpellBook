/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import MenuDropUp from '../../../components/MenuDropUp';
import SpellCard from '../../../components/SpellCard';
import Search from '../../../components/Search';
import { getCharacterClassSpells } from '../../../api/mergedData';
import classSpellFilter from '../../../utils/classSpellFilter';

function ViewKnownSpells() {
  const [spells, setSpells] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [character, setCharacter] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getCharacterClassSpells(firebaseKey).then((data) => {
      const { spellArry, classObj, characterObj } = data;
      const filteredSpells = classSpellFilter(spellArry, classObj, characterObj);
      setCharacter(characterObj);
      setSpells(filteredSpells);
      setSearchResults(filteredSpells);
    });
  }, [firebaseKey]);

  return (
    <>
      <div className="spell-link-btn">
        <h1>Known Spells</h1>
        <MenuDropUp firebaseKey={firebaseKey} characterObj={character} />
      </div>
      <Search contents={spells} setSearchResults={setSearchResults} />
      {searchResults && searchResults.length > 0 ? (
        searchResults.map((spell) => (
          <SpellCard key={spell.name} spellObj={spell} characterObj={character} setCharacter={setCharacter} />
        ))
      ) : (
        <h1>No spells found</h1>
      )}
    </>
  );
}

export default ViewKnownSpells;
