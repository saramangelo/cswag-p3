import Nav from "react-bootstrap/Nav";
import Sidebar from "./Sidebar";
import AuthService from "../utils/auth";

function Navbar() {
  return (
    <Nav fill variant="tabs" defaultActiveKey="/home">
      <Sidebar />
      <Nav.Item>
        <Nav.Link href="/mytickets">My Tickets</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/messages">Message Center</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        {/* need to link <LoginForm/> ? */}
        <Nav.Link href="/">Logout</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navbar;
