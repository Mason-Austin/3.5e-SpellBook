import { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';

function MenuModal({ firebaseKey }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
      <FaPlusCircle className="icon-plus" onClick={handleShow} />
      <Modal show={show} onHide={handleClose}>
        <ListGroup className="menu-group">
          <ListGroup.Item action href={`/character/edit/${firebaseKey}`}>
            Edit Character
          </ListGroup.Item>
          <ListGroup.Item action href="#link2">
            Spell Slots
          </ListGroup.Item>
        </ListGroup>
      </Modal>
    </>
  );
}

export default MenuModal;

MenuModal.propTypes = {
  firebaseKey: PropTypes.string,
}.isRequired;
