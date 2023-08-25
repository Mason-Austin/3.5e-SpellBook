import React, { useEffect, useState } from 'react';
import getSpells from '../api/spellData';
import SpellCard from '../components/SpellCard';
import Search from '../components/Search';

function ViewSpells() {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    getSpells().then(setSpells);
  }, []);

  return (
    <>
      <h1>All Spells</h1>
      <Search show="{show}" />
      {spells.map((spell) => (
        <SpellCard key={spell.name} spellObj={spell} />
      ))}
    </>
  );
}

export default ViewSpells;
