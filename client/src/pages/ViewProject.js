import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Sidebar from "../components/Sidebar";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_SINGLE_PROJECT } from "../utils/queries";
import Spinner from "../components/Spinner";
import ProtectPage from "../components/ProtectPage";
import ProjectModal from "../components/ProjectModal";
import TicketModal from "../components/TicketModal";
import { useState } from "react";
import ProjectTickets from "../components/ProjectTickets";
import AuthService from "../utils/auth";
import AddTicketToProjectModal from "../components/AddTicketToProjectModal";
import Button from "react-bootstrap/Button";
// ICEBOXED COMMENT LIST
// import CommentList from "../components/CommentList";

const styles = {
  header: {
    fontFamily: "Rubik Mono One, sans-serif",
    fontSize: "30px",
  },
  button: {
    fontFamily: "Rubik Mono One, sans-serif",
  },
};

const auth = AuthService;

const ViewProject = ({
  handleClose,
  handleShow,
  show,
  handleProjectShow,
  handleProjectClose,
  showProject,
}) => {
  const { projectId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_PROJECT, {
    variables: { projectId },
  });

  const project = data?.project || [];

  // Date formatters for createdAt and updatedAt
  const createdAt = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(project.createdAt);
  const updatedAt = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(project.updatedAt);

  const [projectData, setProjectData] = useState([]);

  const [dashData, setDashData] = useState([]);

  const currentUser = auth.getProfile().data;

  return (
    <>
      {auth.loggedIn() ? (
        loading ? (
          <Spinner />
        ) : (
          <Container fluid className="body-container">
            <Sidebar
              handleShow={handleShow}
              handleProjectShow={handleProjectShow}
            />
            <Row>
              <Col xs={1} lg={3}>
                {" "}
              </Col>
              <Col xs={10} lg={8}>
                <Card className="text-center detail-card">
                  <Card.Header>Project Details</Card.Header>
                  <Card.Body>
                    <>
                      <ListGroup>
                        <ListGroup.Item>
                          Title: {project.projectTitle}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Description: {project.projectDescription}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Status: {project.projectStatus}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Project Manager: {project.projectManager}
                        </ListGroup.Item>
                        <ListGroup.Item>Created at: {createdAt}</ListGroup.Item>
                        <ListGroup.Item>Updated at: {updatedAt}</ListGroup.Item>
                      </ListGroup>
                    </>
                  </Card.Body>
                  <Card.Footer className="text-muted"></Card.Footer>
                </Card>
                <>
                  <Button
                    style={styles.button}
                    variant="dark"
                    onClick={handleShow}
                  >
                    Create a ticket for this project
                  </Button>
                  <AddTicketToProjectModal />

                  <ProjectTickets />
                  {/* ICEBOX */}
                  {/* <CommentList /> */}
                </>
              </Col>
            </Row>
            <TicketModal
              dashData={dashData}
              setDashData={setDashData}
              currentUser={currentUser}
              handleClose={handleClose}
              show={show}
            />
            <ProjectModal
              projectData={projectData}
              setProjectData={setProjectData}
              currentUser={currentUser}
              handleProjectClose={handleProjectClose}
              showProject={showProject}
            />
          </Container>
        )
      ) : (
        <div>
          <ProtectPage />
        </div>
      )}
    </>
  );
};

export default ViewProject;
