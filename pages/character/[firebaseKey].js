/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
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
        <h2>{spell}</h2>
      ))}
    </div>
  );
}
