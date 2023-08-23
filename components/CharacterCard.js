/* eslint-disable @next/next/no-img-element */
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { FaTrashAlt } from 'react-icons/fa';

function CharacterCard({ charcterObj }) {
  return (
    <Card>
      <Card.Body>
        <img src="https://d1vzi28wh99zvq.cloudfront.net/images/8957/210791-thumb140.png" alt="spellbook cover" />
        <h2>{charcterObj.name}</h2>
        <h3>{charcterObj.class}</h3>
        <h3>Level {charcterObj.level}</h3>
        <FaTrashAlt />
      </Card.Body>
    </Card>
  );
}

CharacterCard.propTypes = {
  charcterObj: PropTypes.shape({
    name: PropTypes.string,
    class: PropTypes.string,
    level: PropTypes.number,
    firebaseKey: PropTypes.string,
  }).isRequired,
};

export default CharacterCard;
