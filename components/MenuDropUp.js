import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import PropTypes from 'prop-types';
import { ButtonGroup } from 'react-bootstrap';
import SpellManagerModal from './SpellMangerModal';

function MenuDropUp({ firebaseKey, characterObj }) {
  const whichWindow = () => {
    if (window.location.pathname.includes('/character/spell/')) {
      return true;
    }
    return false;
  };
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
          <Dropdown.Item
            key={whichWindow() ? 'prepared-spells' : 'known-spells'}
            href={whichWindow() ? `/character/${firebaseKey}` : `/character/spell/${firebaseKey}`}
          >
            {whichWindow() ? 'Prepared Spells' : 'Known Spells'}
          </Dropdown.Item>
          <Dropdown.Item key="spell-manager">
            <SpellManagerModal characterObj={characterObj} />
          </Dropdown.Item>
          <Dropdown.Item key="edit-character" href={`/character/edit/${firebaseKey}`}>
            Edit Character
          </Dropdown.Item>
        </DropdownButton>
      </div>
    </>
  );
}

export default MenuDropUp;

MenuDropUp.propTypes = {
  firebaseKey: PropTypes.string,
}.isRequired;
