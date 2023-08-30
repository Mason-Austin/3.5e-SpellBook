import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import PropTypes from 'prop-types';
import { ButtonGroup } from 'react-bootstrap';

function MenuDropUp({ firebaseKey }) {
  return (
    <>
      <div className="mb-2">
        <DropdownButton
          as={ButtonGroup}
          key="down"
          id="dropdown-button-drop-down"
          drop="down"
          variant="secondary"
          title="Menu"
        >
          <Dropdown.Item href={`/character/edit/${firebaseKey}`}>Edit Character</Dropdown.Item>
          <Dropdown.Item>Spell Slots</Dropdown.Item>
        </DropdownButton>
      </div>
    </>
  );
}

export default MenuDropUp;

MenuDropUp.propTypes = {
  firebaseKey: PropTypes.string,
}.isRequired;
