import React from 'react';
import DashboardJoinsIndex from './dashboard_joins';
import DashboardHostsIndex from './dashboard_hosts';

class Dashboard extends React.Component {

  render(){
    return(
      <div className="dashboard">
        <DashboardJoinsIndex />
        <DashboardHostsIndex />
      </div>
    )
  }
}

export default Dashboard;
