/* eslint-disable react/prop-types */
import { CircularProgress } from '@mui/material';
import { FaPlus, FaMinus } from 'react-icons/fa';

export default function SpellSlot({ currentSpellSlot, maxSpellSlot }) {
  return (
    <>
      <div style={{ border: 'red dotted 1px', position: 'relative' }}>
        <p style={{ position: 'absolute', right: '20%', top: '15%' }}>{currentSpellSlot}/{maxSpellSlot}</p>
        <FaMinus />
        <CircularProgress variant="determinate" value={50} />
        <FaPlus />
      </div>
    </>
  );
}
