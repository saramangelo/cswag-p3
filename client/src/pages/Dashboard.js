import React, { useState } from "react";
import DashboardTable from "../components/DashboardTable";
import { useQuery } from "@apollo/client";
import { QUERY_TICKETS } from "../utils/queries";
import TicketModal from "../components/TicketModal";
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

function Dashboard({handleShow, handleClose, show}) {
  const { loading, data } = useQuery(QUERY_TICKETS, {
    onCompleted: () => {
      setDashData(data.tickets);
    },
  });

  const [dashData, setDashData] = useState([]);


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
              {/* <header>
                <Navbar />

              </header> */}
              <Card body className="welcome-card">
                  <header style={styles.header}>
                    Welcome, {currentUser.username}!
                  </header>
                </Card>

                <Button style={styles.button} variant="dark" onClick={handleShow}>
                  Create a ticket
                </Button>
                <TicketModal dashData={dashData} setDashData={setDashData} currentUser={currentUser} handleClose={handleClose} show={show}/>

                {loading ? (
                  <Spinner />
                ) : (
                  <div>
                    <div style={styles.header}>Current tickets</div>
                    <DashboardTable
                      tickets={dashData}
                      setDashData={setDashData}
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

export default Dashboard;
