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
    const joins = this.props.joins.map((join) => <DashboardJoinsDetail key={join.id} join={join} /> )
    return(
      <div className="dashboard-joins-index">
        {joins}
      </div>
    )
  }
}

export default DashboardJoinsIndex;
