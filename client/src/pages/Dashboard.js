import React, { useState } from "react";
import Navbar from "../components/Navbar";
import DashboardTable from "../components/DashboardTable";
import { useQuery } from "@apollo/client";
import { QUERY_TICKETS } from "../utils/queries";
import TicketModal from "../components/TicketModal";
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
    fontSize: "30px",
  },
};

function Dashboard() {
  const { loading, data } = useQuery(QUERY_TICKETS, {
    onCompleted: () => {
      setDashData(data.tickets);
    },
  });

  const [dashData, setDashData] = useState([]);

  return (
    <>
      {auth.loggedIn() ? (
        <Container>
          <Row>
            <Col xs={2} md={2}>
              <Sidebar />
            </Col>
            <Col xs={10} md={10}>
              <header>
                <Navbar />
              </header>
              <div>
                <Card body>
                  <header style={styles.header}>
                    Welcome to your Dashboard!
                  </header>
                </Card>
                <TicketModal dashData={dashData} setDashData={setDashData} />
              </div>
              <div>
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
              </div>
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
