/* eslint-disable react-hooks/exhaustive-deps */
import { CircularProgress } from '@mui/material';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

export default function SpellSlot({
  currentSpellSlot, maxSpellSlot, spellLevel, handleClickPlus, handleClickMinus,
}) {
  const [spellPrecentage, setSpellPrecentage] = useState();
  useEffect(() => {
    setSpellPrecentage((currentSpellSlot / maxSpellSlot) * 100);
  }, [currentSpellSlot]);
  return (
    <>
      <div style={{ border: 'red dotted 1px', position: 'relative' }}>
        <p style={{ margin: 'auto', textAlign: 'center' }}>Level {spellLevel} </p>
        <p style={{ position: 'absolute', right: '33%', bottom: '0%' }}>{currentSpellSlot}/{maxSpellSlot}</p>
        <FaMinus onClick={handleClickMinus} />
        <CircularProgress variant="determinate" value={spellPrecentage} />
        <FaPlus onClick={handleClickPlus} />
      </div>
    </>
  );
}

SpellSlot.propTypes = {
  currentSpellSlot: PropTypes.number,
  maxSpellSlot: PropTypes.number,
  spellLevel: PropTypes.number,
  handleClickMinus: PropTypes.func,
  handleClickPlus: PropTypes.func,
}.isRequired;
