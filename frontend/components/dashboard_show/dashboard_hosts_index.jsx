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
      <div className="dashboard-hosts">
        {hosts}
      </div>
    )
  }
}

export default DashboardHostsIndex;
