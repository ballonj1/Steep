import React from 'react';
import DashboardHostsDetailContainer from './dashboard_hosts_detail_container';
import { Link } from 'react-router-dom';
class DashboardHostsIndex extends React.Component {
  constructor(props){
    super(props)

    this.dashboardText = this.dashboardText.bind(this);
  }

  componentDidMount(){
    this.props.fetchHosts(this.props.session.currentUser.id)
  }

  dashboardText(){
    if (this.props.hosts.length > 0){
      return <h2 className="dashboard-text">Hosted Teatimes</h2>
    } else {
      return (
        <div>
          <h2 className="dashboard-text">No Hosted Teatimes</h2>
          {(this.props.session.currentUser.city_id) ? <Link className='host-button' to={`/cities/${this.props.session.currentUser.city_id}/hosting`}>HOST TEATIME</Link> : ""}
        </div>
      )
    }
  }

  render(){
    const hosts = this.props.hosts.map((host, idx) => <DashboardHostsDetailContainer key={idx} host={host}/>)
    const dashboardText = this.dashboardText();
    return(
      <div className="dashboard-index">
        <div className="dashboard-info">
          {dashboardText}
        </div>
        <div className="dashboard-content">
          {hosts}
        </div>
      </div>
    )
  }
}

export default DashboardHostsIndex;
