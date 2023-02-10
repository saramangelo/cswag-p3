import React from 'react';
import Navbar from '../components/Navbar';
import DashboardTable from '../components/DashboardTable';

function Dashboard() {
  return (
    <div>
      <header>
      <Navbar/>
      </header>
    <div>
      <DashboardTable/>
    </div>

    </div>

  )
}

export default Dashboard