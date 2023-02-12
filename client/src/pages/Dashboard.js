import React from "react";
import Navbar from "../components/Navbar";
import DashboardTable from "../components/DashboardTable";
import Welcome from "../components/Welcome";

const styles = {
  header: {
    fontFamily: "Rubik Mono One, sans-serif",
    fontSize: "30px",
  },
};

function Dashboard() {
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
        <DashboardTable />
      </div>
      
    </div>
  );
}

export default Dashboard;


