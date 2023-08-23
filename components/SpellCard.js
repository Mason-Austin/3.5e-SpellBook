import Card from 'react-bootstrap/Card';

function SpellCard(SpellName) {
  return (
    <Card>
      <Card.Body>{SpellName}</Card.Body>
    </Card>
  );
}

export default SpellCard;
