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
  const [diceValue, setDiceValue] = useState(false);
  const [selectedDice, setSelectedDice] = useState(initalState);
  const diceIcons = {
    width: '5rem',
    height: '5rem',
  };

  const handleRollClick = () => {
    let allSingleDiceValue = '';
    Object.keys(selectedDice).forEach((key) => {
      if (selectedDice[key] > 0) {
        const value = selectedDice[key];
        newDiceBox.roll(`${value}${key}`);
      }
    });
    newDiceBox.onRollComplete = (rolls) => {
      const totalDiceSum = rolls.reduce((acc, result) => acc + result.value, 0);
      rolls.forEach((rollGroup) => {
        rollGroup.rolls.forEach((roll) => {
          const diceTotal = roll.value;
          allSingleDiceValue += `${diceTotal} + `;
        });
      });
      allSingleDiceValue = allSingleDiceValue.slice(0, -2);
      allSingleDiceValue += ` = ${totalDiceSum}`;
      setDiceValue(allSingleDiceValue);
    };
  };

  const handleClickClear = () => {
    setSelectedDice(initalState);
    newDiceBox.clear();
    setDiceValue(false);
  };

  const displaySelectedDice = () => {
    let selectedDiceString = '';
    Object.keys(selectedDice).forEach((key) => {
      if (selectedDice[key] > 0) {
        const value = selectedDice[key];
        selectedDiceString += (`${value}${key} + `);
      }
    });
    selectedDiceString = selectedDiceString.slice(0, -2);
    return selectedDiceString;
  };

  const handleDiceClick = (e) => {
    const name = e.target.alt;

    // Check if it's a right-click (context menu)
    if (e.button === 2 && selectedDice[name] > 0) {
      setSelectedDice((prevState) => ({
        ...prevState,
        [name]: prevState[name] - 1,
      }));
    } else if (e.button === 0) {
      setSelectedDice((prevState) => ({
        ...prevState,
        [name]: prevState[name] + 1,
      }));
    }
  };

  useEffect(() => {
    const diceBox = new DiceBox('#dice-box', {
      id: 'dice-canvas',
      assetPath: '/assets/dice-box/',
      scale: 5,
      throwForce: 5,
    });

    setNewDiceBox(diceBox);
    diceBox.init();
  }, []);

  return (
    <>
      <div className="dice-UI">
        <div>
          <Icon onMouseDown={handleDiceClick} onContextMenu={(e) => e.preventDefault()} sx={diceIcons}>
            <img value="d4" src={d4.src} alt="d4" />
          </Icon>
          <Icon onMouseDown={handleDiceClick} onContextMenu={(e) => e.preventDefault()} value="d6" sx={diceIcons}>
            <img src={d6.src} alt="d6" />
          </Icon>
          <Icon onMouseDown={handleDiceClick} onContextMenu={(e) => e.preventDefault()} value="d8" sx={diceIcons}>
            <img src={d8.src} alt="d8" />
          </Icon>
          <Icon onMouseDown={handleDiceClick} onContextMenu={(e) => e.preventDefault()} value="d10" sx={diceIcons}>
            <img src={d10.src} alt="d10" />
          </Icon>
          <Icon onMouseDown={handleDiceClick} onContextMenu={(e) => e.preventDefault()} value="d12" sx={diceIcons}>
            <img src={d12.src} alt="d12" />
          </Icon>
          <Icon onMouseDown={handleDiceClick} onContextMenu={(e) => e.preventDefault()} value="d20" sx={diceIcons}>
            <img src={d20.src} alt="d20" />
          </Icon>
        </div>
        <div style={{ display: 'flex', flexFlow: 'column wrap' }}>
          <Button style={{ margin: 'auto' }} onClick={handleRollClick} variant="primary">Roll</Button>
          <Button style={{ margin: 'auto' }} onClick={handleClickClear} variant="primary">Clear</Button>
        </div>
      </div>
      <h3 className="dice-UI">{displaySelectedDice()}</h3>
      <div id="dice-box">
        <h3 className="dice-UI">{diceValue}</h3>
      </div>
    </>
  );
}

export default DiceComponent;
