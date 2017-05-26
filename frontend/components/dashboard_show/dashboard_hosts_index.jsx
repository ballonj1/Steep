import React from 'react';
import DashboardHostsDetail from './dashboard_hosts_detail';

class DashboardHostsIndex extends React.Component {
  constructor(props){
    super(props)

  }

  componentDidMount(){
    this.props.fetchHosts(this.props.session.currentUser.id)
  }

  render(){
    const hosts = this.props.hosts.map((host, idx) => <DashboardHostsDetail key={idx} host={host}/>)
    return(
      <div className="dashboard-index">
        <div className="dashboard-info">
          <h2 className="dashboard-text">Events you're hosting!</h2>
        </div>
        <div className="dashboard-content">
          {hosts}
        </div>
      </div>
    )
  }
}

export default DashboardHostsIndex;
