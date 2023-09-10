import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaDice } from 'react-icons/fa';
import Form from 'react-bootstrap/Form';

const initialState = {
  numDice: '1',
  typeOfDice: '',
  result: '',
};

function DiceRollerModal() {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState(initialState);

  const handleClose = () => {
    setShow(false);
    setInput(initialState);
  };
  const handleShow = () => setShow(true);

  const diceRollerFunc = () => {
    let randResult = 0;
    for (let index = 0; index < input.numDice; index++) {
      randResult += Math.floor(Math.random() * input.typeOfDice) + 1;
    }
    setInput({ ...input, result: randResult });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <FaDice onClick={handleShow} />

      <Modal show={show} onHide={handleClose} style={{ color: 'black' }} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Dice Roller</Modal.Title>
        </Modal.Header>
        <Form.Group className="mb-3">
          <Form.Label>Number of Dice</Form.Label>
          <Form.Control value={input.numDice} onChange={handleChange} name="numDice" type="number" placeholder="Number of Dice" />
        </Form.Group>
        <Form.Select value={input.typeOfDice} name="typeOfDice" onChange={handleChange} aria-label="Default select example">
          <option>Choose Dice Type</option>
          <option value="100">d100</option>
          <option value="20">d20</option>
          <option value="12">d12</option>
          <option value="10">d10</option>
          <option value="8">d8</option>
          <option value="6">d6</option>
          <option value="4">d4</option>
        </Form.Select>
        <Form.Group className="mb-3">
          <Form.Label>Results</Form.Label>
          <Form.Control value={input.result} name="result" type="text" />
        </Form.Group>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={diceRollerFunc}>
            Role
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DiceRollerModal;