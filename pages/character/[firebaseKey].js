/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { FaPlusCircle } from 'react-icons/fa';
import Link from 'next/link';
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
      <Link passHref href={`/character/edit/${firebaseKey}`}>
        <FaPlusCircle />
      </Link>
    </div>
  );
}
