import Table from "react-bootstrap/Table";
import { MDBIcon } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import EditTicketModal from "./EditTicketModal";

function DashboardTable({ tickets, setDashData }) {
  if (!tickets.length) {
    return <h3>No Tickets Yet</h3>;
  }
  console.log(tickets);
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
          tickets.map((ticket, i) => (
            <tr key={i}>
              <td>{ticket.ticketTitle}</td>
              <td>Unassigned</td>
              <td>{ticket.ticketType}</td>
              <td>{ticket.ticketPriority}</td>
              <td>{ticket.ticketStatus}</td>
              <td>
                <Link to={`/viewticket/${ticket._id}`}>
                  {" "}
                  <MDBIcon fas icon="eye" />{" "}
                </Link>
                <EditTicketModal
                  ticket={ticket}
                  tickets={tickets}
                  setDashData={setDashData}
                />
                <Link>
                  {" "}
                  <MDBIcon far icon="trash-alt" />{" "}
                </Link>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}

export default DashboardTable;
