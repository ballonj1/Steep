import React from 'react';
import DashboardJoinsIndexContainer from './dashboard_joins_index_container';
import DashboardHostsIndexContainer from './dashboard_hosts_index_container';

class Dashboard extends React.Component {

  render(){
    return(
      <div className="dashboard">
        <div className="dashboard-index-container">
          <DashboardJoinsIndexContainer />
          <DashboardHostsIndexContainer />
        </div>
      </div>
    )
  }
}

export default Dashboard;
