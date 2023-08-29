/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { FaPlusCircle } from 'react-icons/fa';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import SpellCard from '../../../components/SpellCard';
import Search from '../../../components/Search';
import { getCharacterClassSpells } from '../../../api/mergedData';
import classSpellFilter from '../../../utils/classSpellFilter';

function ViewKnownSpells() {
  const [spells, setSpells] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [character, setCharacter] = useState({});
  // const [characterClass, setCharacterClass] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getCharacterClassSpells(firebaseKey).then((data) => {
      const { spellArry, classObj, characterObj } = data;
      console.warn(classObj, characterObj);
      const filteredSpells = classSpellFilter(spellArry, classObj, characterObj);
      setCharacter(characterObj);
      // setCharacterClass(classObj);
      setSpells(filteredSpells);
      setSearchResults(filteredSpells);
    });
  }, [firebaseKey]);

  return (
    <>
      <div className="spell-link-btn">
        <h1>Known Spells</h1>
        <Link passHref href={`/character/${firebaseKey}`}>
          <Button className="link-btn">Prepared Spells</Button>
        </Link>
      </div>
      <Search contents={spells} setSearchResults={setSearchResults} />
      {searchResults?.map((spell) => (
        <SpellCard key={spell.name} spellObj={spell} characterObj={character} setCharacter={setCharacter} />
      ))}
      <Link passHref href={`/character/edit/${firebaseKey}`}>
        <FaPlusCircle className="icon-plus" />
      </Link>
    </>
  );
}

export default ViewKnownSpells;
