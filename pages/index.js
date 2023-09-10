/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-extraneous-dependencies */
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
    <div style={{ margin: 'auto auto', width: '100%' }}>
      <h1>Characters</h1>
      <div className="rw">
        {characters.map((character) => (
          <CharacterCard key={character.firebaseKey} characterObj={character} onUpdate={getAllCharacters} />
        ))}
      </div>
    </div>
  );
}

export default Home;
