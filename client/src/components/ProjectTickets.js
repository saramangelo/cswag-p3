import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import "../App.css";

function ProjectTickets({project}) {
  // if (!tickets.length) {
  //   return <h3>No Tickets Yet</h3>;
  // }
  return (
    <>
      <Card className="project-ticket-table">
        <Card>
          <header className="project-ticket-header">Tickets for '{project.projectTitle}'</header>
        </Card>
        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th>Title</th>
              <th>Submitter</th>
              <th>Type</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* {tickets &&
            tickets.map((ticket, i) => ( */}
            <tr>
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
              <td className="dashboard-table-links"></td>
            </tr>
            <tr>
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
              <td className="dashboard-table-links"></td>
            </tr>
            <tr>
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
              <td className="dashboard-table-links"></td>
            </tr>
            {/* ))} */}
          </tbody>
        </Table>
      </Card>
    </>
  );
}

export default ProjectTickets;
