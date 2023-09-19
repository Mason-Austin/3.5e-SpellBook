/* eslint-disable no-else-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Form } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const initalState = {
  name: '',
  school: [],
  level: [],
};

function Search({ contents, setSearchResults }) {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState(initalState);
  const [selectedSchools, setSelectedSchools] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);

  const extractNumericLevel = (level) => {
    const numericPart = level?.match(/\d+/); // Extract numeric digits from the level string
    return numericPart ? parseInt(numericPart[0], 10) : null; // Convert to integer or return null
  };

  const handleChangeSchool = (school) => {
    setSelectedSchools((prevSelected) => {
      if (prevSelected.includes(school)) {
        return prevSelected.filter((selected) => selected !== school);
      } else {
        return [...prevSelected, school];
      }
    });
  };

  const handleChangeLevel = (Level) => {
    setSelectedLevels((prevSelected) => {
      if (prevSelected.includes(Level)) {
        return prevSelected.filter((selected) => selected !== Level);
      } else {
        return [...prevSelected, Level];
      }
    });
  };

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

    if (selectedSchools.length > 0) {
      resultsArray = contents.filter((content) => selectedSchools.includes(content.school));
    } else {
      resultsArray = contents;
    }

    if (selectedLevels.length > 0) {
      resultsArray = resultsArray.filter((content) => {
        const contentLevel = extractNumericLevel(content.level);
        return selectedLevels.includes(contentLevel);
      });
    }

    if (input.name) {
      resultsArray = resultsArray.filter((content) => content.name?.toLowerCase().includes(input.name));
    }

    setSearchResults(resultsArray);
  }, [input, selectedSchools, selectedLevels]);

  return (
    <>
      <FaSearch className="icon-search" onClick={handleShow} />

      <Modal
        className="filter-modal"
        show={show}
        onHide={handleClose}
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Search/Filter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control
              type="text"
              onChange={handleChange}
              placeholder="Spell Name"
              name="name"
              value={input.name}
            />
            <Dropdown>
              <Dropdown.Toggle style={{ margin: '2% auto' }} variant="success" id="dropdown-basic">
                School of Magic
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {['Abjuration', 'Conjuration', 'Divination', 'Enchantment', 'Evocation', 'Illusion', 'Necromancy', 'Transmutation'].map((type) => (
                  <div key={type} className="mb-3">
                    <Form.Check
                      type="checkbox"
                      id={type}
                      label={type}
                      value={type}
                      onChange={() => handleChangeSchool(type)}
                      name="school"
                      checked={selectedSchools.includes(type)}
                    />
                  </div>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Spell Level
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((type) => (
                  <div key={type} className="mb-3">
                    <Form.Check
                      type="checkbox"
                      id={type}
                      label={type}
                      value={type}
                      onChange={() => handleChangeLevel(type)}
                      name="level"
                      checked={selectedLevels.includes(type)}
                    />
                  </div>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => { setInput(initalState); }}>
            Clear Filter
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
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
