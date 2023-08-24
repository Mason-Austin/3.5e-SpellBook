import React, { useEffect, useState } from 'react';
import getSpells from '../api/spellData';
import SpellCard from '../components/SpellCard';

function ViewSpells() {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    getSpells().then(setSpells);
  }, []);

  return (
    <>
      <h1>All Spells</h1>
      {spells.map((spell) => (
        <SpellCard key={spell.name} spellObj={spell} />
      ))}
    </>
  );
}

export default ViewSpells;
