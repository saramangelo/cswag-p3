import React, { useState } from "react";
import Navbar from "../components/Navbar";
import DashboardTable from "../components/DashboardTable";
import { useQuery } from "@apollo/client";
import { QUERY_TICKETS } from "../utils/queries";
import TicketModal from "../components/TicketModal";
import Card from "react-bootstrap/Card";
import Spinner from "../components/Spinner";
import Sidebar from "../components/Sidebar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

const styles = {
  header: {
    fontFamily: "Rubik Mono One, sans-serif",
    fontSize: "30px"
  },
};

function Dashboard() {
  const { loading, data } = useQuery(QUERY_TICKETS, {
    onCompleted: () => {
      setDashData(data.tickets);
    },
  });

  const [dashData, setDashData] = useState([]);

  // modal variable states
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid className="body-container">
      <Sidebar />
      <Row>
        <Col xs={1} lg={2} >
          {" "}
        </Col>
        <Col xs={10} lg={9}>
          {/* <header>
            <Navbar />
          </header> */}
          <Card body className="welcome-card">
            <header style={styles.header}>Welcome to your Dashboard</header>
          </Card>
          <TicketModal dashData={dashData} setDashData={setDashData} />
          <div>
            {loading ? (
              <Spinner />
            ) : (
              <div>
                <div style={styles.header}>Current tickets</div>
                <DashboardTable tickets={dashData} />
              </div>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
