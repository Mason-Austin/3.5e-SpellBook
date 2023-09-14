/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import DiceBox from '@3d-dice/dice-box';
import { Button } from 'react-bootstrap';

function DiceComponent() {
  const [newDiceBox, setNewDiceBox] = useState();
  const handleDiceRoll = () => {
    newDiceBox.roll('6d6');
  };
  useEffect(() => {
    // Create a new instance of DiceBox and initialize it when the component mounts
    const diceBox = new DiceBox('#dice-box', {
      id: 'dice-canvas',
      assetPath: '/assets/dice-box/', // Adjust the path based on your project structure
      scale: 5,
      throwForce: 5,
    });

    setNewDiceBox(diceBox);

    diceBox.init();

    // Clean up the DiceBox instance when the component unmounts
  }, []);

  return (
    <>
      <Button type="button" variant="danger" onClick={handleDiceRoll}>Sign Out</Button>
      <div id="dice-box" />
    </>
  );
}

export default DiceComponent;
