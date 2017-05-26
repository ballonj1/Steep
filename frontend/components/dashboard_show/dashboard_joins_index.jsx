import React from 'react';
import DashboardJoinsDetailContainer from './dashboard_joins_detail_container';
import { Link } from 'react-router-dom';

class DashboardJoinsIndex extends React.Component {
  constructor(props){
    super(props)

    this.dashboardText = this.dashboardText.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if (this.props.session.currentUser.id !== nextProps.session.currentUser.id){
      this.props.fetchJoins(nextProps.session.currentUser.id)
    }
  }

  componentDidMount(){
    this.props.fetchJoins(this.props.session.currentUser.id)
  }

  dashboardText(){
    if (this.props.joins.length > 0){
      return <h2 className="dashboard-text">Joined Teatimes</h2>
    } else {
      return (
        <div>
          <h2 className="dashboard-text">No Joined Teatimes</h2>
          <Link className='host-button' to={'/cities'}>FIND TEATIMES</Link>
        </div>
      )
    }
  }

  render(){
    const joins = this.props.joins.map((join, idx) => <DashboardJoinsDetailContainer key={idx} join={join} /> )
    const dashboardText = this.dashboardText();
    return(
      <div className="dashboard-index-1">
        <div className="dashboard-info">
          {dashboardText}
        </div>
        <div className="dashboard-content">
          {joins}
        </div>
      </div>
    )
  }
}

export default DashboardJoinsIndex;
