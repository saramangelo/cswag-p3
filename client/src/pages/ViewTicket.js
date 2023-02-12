import Card from 'react-bootstrap/Card';
import Navbar from '../components/Navbar';

function ViewTicket() {
  return (
    <>
    <Navbar/>
      
    <Card className="text-center">
      <Card.Header>Ticket</Card.Header>
      <Card.Body>
        <Card.Title>Ticket Details</Card.Title>
        <Card.Text>
          Import ticket data here
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted"></Card.Footer>
    </Card>
    </>
  );
}

export default ViewTicket;