import React from "react";
import Navbar from "../components/Navbar";
import DashboardTable from "../components/DashboardTable";
import Welcome from "../components/Welcome";
import { useQuery } from "@apollo/client";
import { QUERY_TICKETS } from "../utils/queries";

const styles = {
  header: {
    fontFamily: "Rubik Mono One, sans-serif",
    fontSize: "30px",
  },
};

function Dashboard() {
  const { loading, data } = useQuery(QUERY_TICKETS, {
    fetchpolicy: "no cache",
  });

  const tickets = data?.tickets || [];
  console.log(tickets);
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div>
        <Welcome />
      </div>
      <div>
        <div style={styles.header}>Current tickets</div>
        <DashboardTable tickets={tickets} />
      </div>
    </div>
  );
}

export default Dashboard;
