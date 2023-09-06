/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import SpellSlot from './SpellSlot';

function SpellManagerModal({ characterObj }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button> */}

      <p onClick={handleShow}>Spell Manager</p>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        style={{ color: 'black' }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Spell Manager</Modal.Title>
        </Modal.Header>
        <Modal.Body className="rw">
          {characterObj.spell_slots?.map((spellLevel, index) => (
            spellLevel !== null ? (
              <SpellSlot currentSpellSlot={spellLevel} maxSpellSlot={characterObj.max_spell_slots[index]} />
            ) : null
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SpellManagerModal;

SpellManagerModal.propTypes = {
  characterObj: PropTypes.object,
}.isRequired;
