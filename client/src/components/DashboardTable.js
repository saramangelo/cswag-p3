import Table from "react-bootstrap/Table";
import { MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function DashboardTable({ tickets }) {
  if (!tickets.length) {
    return <h3>No Tickets Yet</h3>;
  }

  return (
    <Table striped bordered hover variant="light">
      <thead>
        <tr>
          <th>Title</th>
          <th>Developer</th>
          <th>Type</th>
          <th>Priority</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {tickets &&
          tickets.map((ticket) => (
            <tr key={ticket._id}>
              <td>{ticket.ticketTitle}</td>
              <td>Unassigned</td>
              <td>{ticket.ticketType}</td>
              <td>{ticket.ticketPriority}</td>
              <td>{ticket.ticketStatus}</td>
              <td>

            <Link> <MDBIcon fas icon="eye"  /> </Link> 
            <Link>  <MDBIcon fas icon="pencil-alt" /> </Link> 
            <Link>  <MDBIcon far icon="trash-alt" /> </Link> 
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}

export default DashboardTable;
