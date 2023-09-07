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
  const handleClickPlus = (arryIndex) => {
    console.warn('plus is working');
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
        style={{ color: 'black' }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Spell Manager</Modal.Title>
        </Modal.Header>
        <Modal.Body className="rw">
          {spellSlots?.map((spellLevel, index) => (
            spellLevel !== null ? (
              <SpellSlot currentSpellSlot={spellLevel} maxSpellSlot={characterObj.max_spell_slots[index]} spellLevel={index} handleClickMinus={() => handleClickMinus(index)} handleClickPlus={() => handleClickPlus(index)} />
            ) : null
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SpellManagerModal;

SpellManagerModal.propTypes = {
  characterObj: PropTypes.object,
}.isRequired;
