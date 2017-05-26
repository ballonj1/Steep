import React from 'react';
import DashboardJoinsDetail from './dashboard_joins_detail';

class DashboardJoinsIndex extends React.Component {
  constructor(props){
    super(props)

  }

  componentDidMount(){
    this.props.fetchJoins(this.props.session.currentUser.id)
  }

  render(){
    const joins = this.props.joins.map((join, idx) => <DashboardJoinsDetail key={idx} join={join} /> )
    return(
      <div className="dashboard-index-1">
        <div className="dashboard-info">
          <h2 className="dashboard-text">Events you've joined!</h2>
        </div>
        <div className="dashboard-content">
          {joins}
        </div>
      </div>
    )
  }
}

export default DashboardJoinsIndex;
