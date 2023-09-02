import { CircularProgress } from '@mui/material';

export default function SpellSlot() {
  return (
    <>
      <div style={{ border: 'red dotted 1px', position: 'relative' }}>
        <p style={{ position: 'absolute', right: '20%', top: '15%' }}>1/4</p>
        <CircularProgress variant="determinate" value={50} />
      </div>
    </>
  );
}
