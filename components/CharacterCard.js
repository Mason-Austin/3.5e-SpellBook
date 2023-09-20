/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { FaTrashAlt } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getSingleClass } from '../api/classData';
import { deleteSingleCharacter } from '../api/characterData';

function CharacterCard({ characterObj, onUpdate }) {
  const [characterClass, setCharacterClass] = useState({});
  const router = useRouter();

  const deleteThisCharacter = () => {
    if (window.confirm(`Delete ${characterObj.name}?`)) {
      deleteSingleCharacter(characterObj.firebaseKey).then(() => onUpdate());
    }
  };

  const getCharacterClass = () => {
    getSingleClass(characterObj.character_class).then(setCharacterClass);
  };

  useEffect(() => {
    getCharacterClass();
  }, []);

  return (
    <Card className="character-card">
      <Card.Body className="character-body">
        <img src="https://d1vzi28wh99zvq.cloudfront.net/images/8957/210791-thumb140.png" alt="spellbook cover" />
        <div style={{ width: '55%', marginLeft: '5%' }} onClick={() => { router.push(`/character/${characterObj.firebaseKey}`); }}>
          <h2>{characterObj.name}</h2>
          <div className="character-info">
            <h3>{characterClass.name}</h3>
            <h3>Level {characterObj.level}</h3>
          </div>
        </div>
        <FaTrashAlt onClick={deleteThisCharacter} className="icon-trash" />
      </Card.Body>
    </Card>
  );
}

CharacterCard.propTypes = {
  characterObj: PropTypes.shape({
    name: PropTypes.string,
    character_class: PropTypes.string,
    level: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default CharacterCard;
