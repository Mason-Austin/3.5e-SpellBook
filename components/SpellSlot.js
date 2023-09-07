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
      <div className="spell-slot">
        <p>Level {spellLevel} </p>
        <p style={{ position: 'absolute', right: '42%', top: '49%' }}>{currentSpellSlot}/{maxSpellSlot}</p>
        <div className="spell-slot-ind">
          <FaMinus onClick={handleClickMinus} />
          <CircularProgress style={{ margin: '10px' }} variant="determinate" value={spellPrecentage} />
          <FaPlus onClick={handleClickPlus} />
        </div>
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
