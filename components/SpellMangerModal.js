/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import SpellSlot from './SpellSlot';
import { updateCharacter } from '../api/characterData';

function SpellManagerModal({ characterObj }) {
  const [show, setShow] = useState(false);
  const [spellSlots, setSpellSlots] = useState([]);

  useEffect(() => {
    setSpellSlots(characterObj.spell_slots);
  }, [characterObj]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClickReset = () => {
    setSpellSlots(characterObj.max_spell_slots);
  };
  const handleClickPlus = (arryIndex) => {
    if (spellSlots[arryIndex] === characterObj.max_spell_slots[arryIndex]) {
      window.alert('Spell slots can not exceed your max limit');
    } else {
      const updatedSpellSlots = [...spellSlots];
      updatedSpellSlots[arryIndex] += 1;
      setSpellSlots(updatedSpellSlots);
    }
  };
  const handleSave = () => {
    updateCharacter({ ...characterObj, spell_slots: spellSlots });
    handleClose();
  };
  const handleClickMinus = (index) => {
    if (spellSlots[index] === 0) {
      window.alert('Spell slots can not go below 0');
    } else {
      const updatedSpellSlots = [...spellSlots];
      updatedSpellSlots[index] -= 1;
      setSpellSlots(updatedSpellSlots);
    }
  };
  return (
    <>
      <p style={{ height: '.5rem' }} onClick={handleShow}>Spell Manager</p>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        style={{ color: 'white' }}
      >
        <Modal.Header style={{ backgroundColor: 'black', borderBottom: 'white .2rem solid' }} closeButton>
          <Modal.Title>Spell Manager</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: 'black' }} className="rw">
          {spellSlots?.map((spellLevel, index) => (
            spellLevel !== null ? (
              <SpellSlot key={index} currentSpellSlot={spellLevel} maxSpellSlot={characterObj.max_spell_slots[index]} spellLevel={index} handleClickMinus={() => handleClickMinus(index)} handleClickPlus={() => handleClickPlus(index)} />
            ) : null
          ))}
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: 'black', borderTop: 'white .2rem solid' }}>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="success" onClick={handleSave}>Save</Button>
          <Button variant="primary" onClick={handleClickReset}>Restore Spell Slots</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SpellManagerModal;

SpellManagerModal.propTypes = {
  characterObj: PropTypes.object,
}.isRequired;
