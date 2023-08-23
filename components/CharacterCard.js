/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { FaTrashAlt } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getSingleClass } from '../api/classData';

function CharacterCard({ characterObj }) {
  const [characterClass, setCharacterClass] = useState({});
  const router = useRouter();
  const getCharacterClass = () => {
    getSingleClass(characterObj.character_class).then(setCharacterClass);
  };

  useEffect(() => {
    getCharacterClass();
  }, []);

  return (
    <Card onClick={() => { router.push(`/character/${characterObj.firebaseKey}`); }}>
      <Card.Body>
        <img src="https://d1vzi28wh99zvq.cloudfront.net/images/8957/210791-thumb140.png" alt="spellbook cover" />
        <h2>{characterObj.name}</h2>
        <h3>{characterClass.name}</h3>
        <h3>Level {characterObj.level}</h3>
        <FaTrashAlt />
      </Card.Body>
    </Card>
  );
}

CharacterCard.propTypes = {
  characterObj: PropTypes.shape({
    name: PropTypes.string,
    character_class: PropTypes.string,
    level: PropTypes.number,
    firebaseKey: PropTypes.string,
  }).isRequired,
};

export default CharacterCard;
