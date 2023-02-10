import Nav from 'react-bootstrap/Nav';

function Navbar() {
  return (
    <Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/mytickets">My Tickets</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/messages">Message Center</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/logout">Logout</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navbar;