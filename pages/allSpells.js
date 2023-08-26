import React, { useEffect, useState } from 'react';
import { getSpells } from '../api/spellData';
import SpellCard from '../components/SpellCard';
import Search from '../components/Search';

function ViewSpells() {
  const [spells, setSpells] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getSpells().then((allSpells) => {
      setSpells(allSpells);
      setSearchResults(allSpells);
    });
  }, []);

  return (
    <>
      <h1>All Spells</h1>
      <Search contents={spells} setSearchResults={setSearchResults} />
      {searchResults?.map((spell) => (
        <SpellCard key={spell.name} spellObj={spell} />
      ))}
    </>
  );
}

export default ViewSpells;
