import React, { useState } from "react";
import ProjectTable from "../components/ProjectTable";
import { useQuery } from "@apollo/client";
import { QUERY_PROJECTS } from "../utils/queries";
import ProjectModal from "../components/ProjectModal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Spinner from "../components/Spinner";
import ProtectPage from "../components/ProtectPage";
import Sidebar from "../components/Sidebar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthService from "../utils/auth";

const auth = AuthService;

const styles = {
  header: {
    fontFamily: "Rubik Mono One, sans-serif",
    fontSize: "30px"
  },
  button: {
    fontFamily: "Rubik Mono One, sans-serif",
  },
};

function Projects({handleShow, handleClose, show}) {
  const { loading, data } = useQuery(QUERY_PROJECTS, {
    onCompleted: () => {
      setProjectData(data.projects);
    },
  });

  const [projectData, setProjectData] = useState([]);


  // TicketAuthor from getProfile (current user)
  const currentUser = auth.getProfile().data;
  console.log(currentUser);

  return (
      <>
      {auth.loggedIn() ? (
        <Container fluid className="body-container">
          <Sidebar handleShow={handleShow}/>
          <Row>
            <Col xs={1} lg={2} >
              {" "}
            </Col>
            <Col xs={10} lg={9}>
              <Card body className="welcome-card">
                  <header style={styles.header}>
                    Welcome, {currentUser.username}!
                  </header>
                </Card>

                <Button style={styles.button} variant="dark" onClick={handleShow}>
                  Create a project
                </Button>
                <ProjectModal projectData={projectData} setProjectData={setProjectData} currentUser={currentUser} handleClose={handleClose} show={show}/>

                {loading ? (
                  <Spinner />
                ) : (
                  <div>
                    <div style={styles.header}>Current tickets</div>
                    <ProjectTable
                      projects={projectData}
                      setProjectData={setProjectData}
                    />
                  </div>
                )}
            </Col>
          </Row>
        </Container>
      ) : (
        <div>
          <ProtectPage />
        </div>
      )}
    </>
  );
}

export default Projects;
