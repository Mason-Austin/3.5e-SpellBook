/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-extraneous-dependencies */
import { FaPlusCircle } from 'react-icons/fa';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import CharacterCard from '../components/CharacterCard';
import { useAuth } from '../utils/context/authContext';
import { getCharacters } from '../api/characterData';

function Home() {
  const [characters, setCharacters] = useState([]);

  const { user } = useAuth();

  const getAllCharacters = () => {
    getCharacters(user.uid).then(setCharacters);
  };

  useEffect(() => {
    getAllCharacters();
  }, []);

  return (
    <div>
      <h1>Characters</h1>
      {characters.map((character) => (
        <CharacterCard key={character.firebaseKey} charcterObj={character} />
      ))}
      <Link passHref href="/">
        <FaPlusCircle />
      </Link>
    </div>
  );
}

export default Home;
