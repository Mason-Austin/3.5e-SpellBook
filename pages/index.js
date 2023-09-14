/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
// import DiceBox from '@3d-dice/dice-box'; // Import the DiceBox module
import CharacterCard from '../components/CharacterCard';
import DiceRoller from '../components/DiceRoller';
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

  // useEffect(() => {
  //   // Create a new instance of DiceBox and initialize it when the component mounts
  //   const diceBox = new DiceBox('#dice-box', {
  //     id: 'dice-canvas',
  //     assetPath: '/assets/dice-box/', // Adjust the path based on your project structure
  //     scale: 9,
  //     throwForce: 9,
  //   });

  //   diceBox.init().then(() => {
  //     // Now the diceBox is ready to roll some dice
  //     diceBox.roll('5d4');
  //   });
  // }, []);

  return (
    <>
      <div style={{ margin: 'auto auto', width: '100%' }}>
        <h1>Characters</h1>
        <div className="rw">
          {characters.map((character) => (
            <CharacterCard key={character.firebaseKey} characterObj={character} onUpdate={getAllCharacters} />
          ))}
        </div>
        <DiceRoller />
      </div>
    </>
  );
}

export default Home;
