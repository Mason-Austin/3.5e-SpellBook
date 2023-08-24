import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

function SpellCard({ spellObj }) {
  return (
    <Card>
      <Card.Body><h2>{spellObj.name}</h2></Card.Body>
    </Card>
  );
}

export default SpellCard;

SpellCard.propTypes = {
  spellObj: PropTypes.shape({
    name: PropTypes.string,
    school: PropTypes.string,
    descriptor: PropTypes.string,
    compoents: PropTypes.string,
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
    spellcraft_dc: PropTypes.string,
    to_develop: PropTypes.string,
    focus: PropTypes.string,
    table2: PropTypes.string,
    table3: PropTypes.string,
  }).isRequired,
};
