import Table from "react-bootstrap/Table";
import { MDBIcon } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import EditProjectModal from "./EditProjectModal";

function ProjectTable({ projects, setProjectData }) {
  if (!projects.length) {
    return <h3>No Projects Yet</h3>;
  }
  console.log(projects);
  return (
    <Table striped bordered hover variant="light">
      <thead>
        <tr>
          <th>Project Title</th>
          <th>Project Manager</th>
          <th>Type</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {projects &&
          projects.map((project, i) => (
            <tr key={i}>
              <td>{project.projectTitle}</td>
              <td>{project.projectProjectManager}</td>
              <td>{project.projectType}</td>
              <td>{project.projectStatus}</td>
              <td>
                <Link to={`/viewproject/${project._id}`}>
                  {" "}
                  <MDBIcon fas icon="eye" />{" "}
                </Link>
                <EditProjectModal
                  project={project}
                  projectId={project._id}
                  projects={projects}
                  setProjectData={setProjectData}
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

export default ProjectTable;
