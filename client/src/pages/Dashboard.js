import React from 'react';
import Navbar from '../components/Navbar';
import DashboardTable from '../components/DashboardTable';
import Welcome from '../components/Welcome';

function Dashboard() {
  return (
    <div>
      <header>
      <Navbar/>
      </header>
      <div>
        <Welcome/>
      </div>
    <div>
      <div>
        Current tickets
      </div>
      <DashboardTable/>
    </div>

    </div>

  )
}

export default Dashboard