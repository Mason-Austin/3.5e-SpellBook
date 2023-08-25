/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const initalState = {
  name: '',
  school: '',
  level: '',
};

function Search({ contents, setSearchResults }) {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState(initalState);

  const handleSubmit = (e) => e.preventDefualt();

  // const handleSearchChange = (e) => setInput(e.target.value.toLowerCase());

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((preveState) => ({
      ...preveState,
      [name]: value,
    }));
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (!contents) {
      setSearchResults(contents);
    }
    let resultsArray = [];
    if (!input.name && !input.school && !input.level) {
      resultsArray = contents;
    } else if (input.name && input.school && input.level) {
      resultsArray = contents?.filter((content) => content.name?.toLowerCase().includes(input.name) && content.school.toLowerCase().includes(input.school) && content.level?.toLowerCase().includes(input.level));
    } else if (input.name && input.school) {
      resultsArray = contents?.filter((content) => content.name?.toLowerCase().includes(input.name) && content.school.toLowerCase().includes(input.school));
    } else if (input.name && input.level) {
      resultsArray = contents?.filter((content) => content.name?.toLowerCase().includes(input.name) && content.level.toLowerCase().includes(input.level));
    } else if (input.school && input.level) {
      resultsArray = contents?.filter((content) => content.level?.toLowerCase().includes(input.level) && content.school.toLowerCase().includes(input.school));
    } else if (input.name) {
      resultsArray = contents?.filter((content) => content.name?.toLowerCase().includes(input.name));
    } else if (input.school) {
      resultsArray = contents?.filter((content) => content.school?.toLowerCase().includes(input.school));
    } else if (input.level) {
      resultsArray = contents?.filter((content) => content.level?.toLowerCase().includes(input.level));
    }
    // switch (input) {
    //   case input.name:
    //     console.warn('name');
    //     break;

    //   case input.school:
    //     console.warn('school');
    //     break;

    //   case input.level:
    //     console.warn('level');
    //     break;

    //   default:
    //     console.warn('no filter');
    //     break;
    // }
    setSearchResults(resultsArray);
  }, [input]);

  return (
    <>
      <FaSearch className="icon-search" onClick={handleShow} />

      <Modal
        show={show}
        onHide={handleClose}
        keyboard={false}
        style={{ color: 'black' }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Search/Filter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="text"
              onChange={handleChange}
              placeholder="Spell Name"
              name="name"
              value={input.name}
            />
            <Form.Control
              type="text"
              onChange={handleChange}
              placeholder="School of Magic"
              name="school"
              value={input.school}
            />
            <Form.Control
              type="text"
              onChange={handleChange}
              placeholder="Spell Level"
              name="level"
              value={input.level}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => { setInput(initalState); }}>
            Clear Filter
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Search;

Search.propTypes = {
  contents: PropTypes.array,
  setSearchResults: PropTypes.func,
}.isRequired;
