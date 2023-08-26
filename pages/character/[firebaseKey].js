/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { FaPlusCircle } from 'react-icons/fa';
import Link from 'next/link';
import SpellCard from '../../components/SpellCard';
import getCharacterSpells from '../../api/mergedData';

export default function ViewCharacter() {
  const [spells, setSpells] = useState([]);
  const router = useRouter();

  const { firebaseKey } = router.query;

  const setCharacterSpells = () => {
    getCharacterSpells(firebaseKey).then(setSpells);
  };

  useEffect(() => {
    setCharacterSpells();
  }, [firebaseKey]);
  console.warn(spells);
  return (
    <div>
      <h1>Known Spells</h1>
      {spells.map((spell) => (
        <SpellCard key={spell.name} spellObj={spell} />
      ))}
      <Link passHref href={`/character/edit/${firebaseKey}`}>
        <FaPlusCircle className="icon-plus" />
      </Link>
    </div>
  );
}
