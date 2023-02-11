import Table from "react-bootstrap/Table";

// {/* MAP THROUGH DATA, PRINT {} WHERE 'INSERT DATA' */}
function DashboardTable() {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Title</th>
          <th>Developer</th>
          <th>Status</th>
          <th>Priority</th>
          <th>Date Created</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>INSERT DATA</td>
          <td>INSERT DATA</td>
          <td>INSERT DATA</td>
          <td>INSERT DATA</td>
          <td>INSERT DATA</td>
          <td>INSERT DATA</td>
        </tr>
        <tr>
          <td>INSERT DATA</td>
          <td>INSERT DATA</td>
          <td>INSERT DATA</td>
          <td>INSERT DATA</td>
          <td>INSERT DATA</td>
          <td>INSERT DATA</td>
        </tr>
        <tr>
          <td>INSERT DATA</td>
          <td>INSERT DATA</td>
          <td>INSERT DATA</td>
          <td>INSERT DATA</td>
          <td>INSERT DATA</td>
          <td>INSERT DATA</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default DashboardTable;
