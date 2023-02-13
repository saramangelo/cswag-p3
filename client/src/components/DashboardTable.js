import Table from "react-bootstrap/Table";

function DashboardTable({ tickets = [] }) {
  
  

  if (!tickets.length) {
    return <h3>No Tickets Yet</h3>
  }
  
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Title</th>
          {/* <th>Developer</th> */}
          <th>Description</th>
          <th>Type</th>
          <th>Priority</th>
          <th>Status</th>
          {/* <th>Date Created</th> */}
          {/* <th>Action</th> */}
        </tr>
      </thead>
      <tbody>
        {tickets &&
          tickets.map((ticket) => (
            <tr key={ticket._id}>
              <td>{ticket.ticketTitle}</td>
              <td>{ticket.ticketDescription}</td>
              <td>{ticket.ticketType}</td>
              <td>{ticket.ticketPriority}</td>
              <td>{ticket.ticketStatus}</td>
              {/* <td>INSERT DATA</td> */}
            </tr>
          ))}
      </tbody>
    </Table>
  );
}

export default DashboardTable;
