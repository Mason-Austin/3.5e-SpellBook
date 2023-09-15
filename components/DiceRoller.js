/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import DiceBox from '@3d-dice/dice-box';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
// import { DisplayResults } from '@3d-dice/dice-ui';

function DiceComponent() {
  const [newDiceBox, setNewDiceBox] = useState();
  const [diceValue, setDiceValue] = useState();
  // const Display = new DisplayResults('#dice-box');

  const handleSubmit = (e) => {
    e.preventDefault();
    newDiceBox.roll(diceValue);
  };

  const handleDiceChange = (e) => {
    setDiceValue(e.target.value);
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
  }, []);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FloatingLabel controlId="floatingInput1" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Ex:1d20"
            value={diceValue}
            onChange={handleDiceChange}
            required
          />
        </FloatingLabel>
      </Form>
      <div id="dice-box" />
    </>
  );
}

export default DiceComponent;
