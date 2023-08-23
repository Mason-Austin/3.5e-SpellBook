import Card from 'react-bootstrap/Card';

function SpellCard(spellName) {
  return (
    <Card>
      <Card.Body><h2>{spellName}</h2></Card.Body>
    </Card>
  );
}

export default SpellCard;
