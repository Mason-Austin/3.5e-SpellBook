import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { FaPlusCircle } from 'react-icons/fa';
import Link from 'next/link';
import { getSpells } from '../../../api/spellData';
import SpellCard from '../../../components/SpellCard';
import Search from '../../../components/Search';
import { getSingleCharacter } from '../../../api/characterData';

function ViewSpells() {
  const [spells, setSpells] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [character, setCharacter] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleCharacter(firebaseKey).then(setCharacter);
    getSpells().then((allSpells) => {
      setSpells(allSpells);
      setSearchResults(allSpells);
    });
  }, [firebaseKey]);

  return (
    <>
      <h1>Known Spells</h1>
      <Search contents={spells} setSearchResults={setSearchResults} />
      {searchResults?.map((spell) => (
        <SpellCard key={spell.name} spellObj={spell} characterObj={character} />
      ))}
      <Link passHref href={`/character/edit/${firebaseKey}`}>
        <FaPlusCircle className="icon-plus" />
      </Link>
    </>
  );
}

export default ViewSpells;
