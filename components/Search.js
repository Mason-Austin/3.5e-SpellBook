/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Search({ contents, setSearchResults }) {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => e.preventDefualt();

  const handleSearchChange = (e) => setInput(e.target.value.toLowerCase());

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (!contents) {
      setSearchResults(contents);
    }
    const resultsArray = contents?.filter((content) => content.name.toLowerCase().includes(input));
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
            <Form.Group>
              <Form.Control
                type="text"
                onKeyUp={handleSearchChange}
                placeholder="Search here"
                className="search"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => { setSearchResults(contents); }}>
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
