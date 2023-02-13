import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import DashboardTable from "../components/DashboardTable";
import { useQuery } from "@apollo/client";
import { QUERY_TICKETS } from "../utils/queries";
import TicketModal from "../components/TicketModal";
import Card from "react-bootstrap/Card";

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

  // useEffect(() => {
  //   setDashData(data?.tickets);
  // }, [data?.tickets]);

  // const tickets = data?.tickets || [];
 
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div>
        <Card body>
          <header style={styles.header}>Welcome to your Dashboard!</header>
        </Card>
        <TicketModal dashData={dashData} setDashData={setDashData}/>
      </div>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <div style={styles.header}>Current tickets</div>
            <DashboardTable tickets={dashData} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
