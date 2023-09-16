/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import DiceBox from '@3d-dice/dice-box';
import { Icon } from '@mui/material';
import { Button } from 'react-bootstrap';
import d4 from '../public/assets/dice-icons/d4.svg';
import d6 from '../public/assets/dice-icons/d6.svg';
import d8 from '../public/assets/dice-icons/d8.svg';
import d10 from '../public/assets/dice-icons/d10.svg';
import d12 from '../public/assets/dice-icons/d12.svg';
import d20 from '../public/assets/dice-icons/d20.svg';

const initalState = {
  d4: 0,
  d6: 0,
  d8: 0,
  d10: 0,
  d12: 0,
  d20: 0,
};

function DiceComponent() {
  const [newDiceBox, setNewDiceBox] = useState();
  // const [diceValue, setDiceValue] = useState();
  const [selectedDice, setSelectedDice] = useState(initalState);
  const diceIcons = {
    width: '5rem',
    height: '5rem',
  };
  const handleRollClick = (e) => {
    e.preventDefault();
    Object.keys(selectedDice).forEach((key) => {
      if (selectedDice[key] > 0) {
        const value = selectedDice[key];
        newDiceBox.roll(`${value}${key}`);
      }
    });
  };

  const handleDiceclick = (e) => {
    const name = e.target.alt;
    setSelectedDice((prevState) => ({
      ...prevState,
      [name]: prevState[name] + 1,
    }));
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
      <div style={{ textAlign: 'center' }}>
        <Icon onClick={handleDiceclick} sx={diceIcons}>
          <img value="d4" src={d4.src} alt="d4" />
        </Icon>
        <Icon onClick={handleDiceclick} value="d6" sx={diceIcons}>
          <img src={d6.src} alt="d6" />
        </Icon>
        <Icon onClick={handleDiceclick} value="d8" sx={diceIcons}>
          <img src={d8.src} alt="d8" />
        </Icon>
        <Icon onClick={handleDiceclick} value="d10" sx={diceIcons}>
          <img src={d10.src} alt="d10" />
        </Icon>
        <Icon onClick={handleDiceclick} value="d12" sx={diceIcons}>
          <img src={d12.src} alt="d12" />
        </Icon>
        <Icon onClick={handleDiceclick} value="d20" sx={diceIcons}>
          <img src={d20.src} alt="d20" />
        </Icon>
      </div>
      <Button onClick={handleRollClick} variant="primary">Roll</Button>
      <div id="dice-box" />
    </>
  );
}

export default DiceComponent;
