/* eslint-disable react/forbid-prop-types */
/* eslint-disable prefer-template */
/* eslint-disable react/no-danger */
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { updateCharacter } from '../api/characterData';
// import { updateCharacter } from '../api/characterData';

function SpellCard({
  spellObj,
  characterObj,
  setCharacter,
  onUpdate,
}) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const toggleFavorite = () => {
    if (characterObj.favorite?.includes(spellObj.name)) {
      const newfavArry = characterObj.favorite.filter((spell) => spell !== spellObj.name);
      const payload = ({
        ...characterObj,
        favorite: newfavArry,
      });
      updateCharacter(payload);
      setCharacter({
        ...characterObj,
        favorite: newfavArry,
      });
      if (onUpdate) {
        onUpdate();
      }
    } else {
      const newfavArry = [...(characterObj.favorite || [])];
      newfavArry.push(spellObj.name);
      const payload = ({
        ...characterObj,
        favorite: newfavArry,
      });
      updateCharacter(payload);
      setCharacter({
        ...characterObj,
        favorite: newfavArry,
      });
      if (onUpdate) {
        onUpdate();
      }
    }
  };

  const spellFavorite = () => {
    if (characterObj) {
      if (characterObj.favorite?.includes(spellObj.name)) {
        return <FaStar onClick={toggleFavorite} className="star-icon" />;
      }
      return <FaRegStar onClick={toggleFavorite} className="star-icon" />;
    }
    return '';
  };

  const getDescription = () => {
    if (expanded || spellObj.description.length < 150) {
      return (
        <div>
          <p>{spellObj.description}</p>
          <p>{spellObj.material_components ? `Material Compoents: ${spellObj.material_components}` : ''}</p>
          <div dangerouslySetInnerHTML={{ __html: spellObj.table1 }} />
          <div dangerouslySetInnerHTML={{ __html: spellObj.table2 }} />
          <div dangerouslySetInnerHTML={{ __html: spellObj.table3 }} />
        </div>
      );
    }
    return spellObj.description.slice(0, 150) + '...';
  };

  return (
    <div className={`spell-card ${spellObj.school}`}>
      <h2>{spellObj.name}</h2>
      <div className="spell-info">
        <p>{spellObj.school} {spellObj.descriptor ? `[${spellObj.descriptor}]` : '' }</p>
        <p>{spellObj.components}</p>
      </div>
      <div className="spell-info">
        <p>{spellObj.level}</p>
        <p>{spellObj.casting_time}</p>
      </div>
      <p>{spellObj.range ? `Range: ${spellObj.range}` : ''}</p>
      <p>{spellObj.target ? `Target: ${spellObj.target}` : ''}</p>
      <p>{spellObj.duration ? `Duration: ${spellObj.duration}` : ''}</p>
      <p>{spellObj.area ? `Area: ${spellObj.area}` : ''}</p>
      <p>{spellObj.effect ? `Effect: ${spellObj.effect}` : ''}</p>
      <p>{spellObj.saving_throw ? `Saving Throw: ${spellObj.saving_throw}` : ''}</p>
      <p>{spellObj.spell_resistance ? `Spell Resistance: ${spellObj.spell_resistance}` : ''}</p>
      <p>{getDescription()}</p>
      {spellObj.description.length > 150 && (
        <Button type="button" onClick={toggleExpand}>
          {expanded ? 'Show Less' : 'Show More'}
        </Button>
      )}
      {spellFavorite()}
    </div>
  );
}

// all tables
// xpcost
// spellcraft_dc
// todelvop

export default SpellCard;

SpellCard.propTypes = {
  spellObj: PropTypes.shape({
    name: PropTypes.string,
    level: PropTypes.string,
    school: PropTypes.string,
    descriptor: PropTypes.string,
    components: PropTypes.string,
    casting_time: PropTypes.string,
    range: PropTypes.string,
    target: PropTypes.string,
    duration: PropTypes.string,
    saving_throw: PropTypes.string,
    spell_resistance: PropTypes.string,
    description: PropTypes.string,
    referance: PropTypes.string,
    area: PropTypes.string,
    effect: PropTypes.string,
    table1: PropTypes.string,
    material_components: PropTypes.string,
    xp_cost: PropTypes.string,
    spellcraft_dc: PropTypes.number,
    to_develop: PropTypes.string,
    focus: PropTypes.string,
    table2: PropTypes.string,
    table3: PropTypes.string,
  }).isRequired,
  characterObj: PropTypes.shape({
    favorite: PropTypes.array,
  }),
  setCharacter: PropTypes.func,
  onUpdate: PropTypes.func,
};

SpellCard.defaultProps = {
  characterObj: null,
  setCharacter: null,
  onUpdate: null,
};
