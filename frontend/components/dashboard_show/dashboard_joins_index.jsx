import React from 'react';
import DashboardJoinsDetailContainer from './dashboard_joins_detail_container';

class DashboardJoinsIndex extends React.Component {
  constructor(props){
    super(props)

  }

  componentWillReceiveProps(nextProps){
    if (this.props.session.currentUser.id !== nextProps.session.currentUser.id){
      this.props.fetchJoins(nextProps.session.currentUser.id)
    }
  }

  componentDidMount(){
    this.props.fetchJoins(this.props.session.currentUser.id)
  }

  render(){
    const joins = this.props.joins.map((join, idx) => <DashboardJoinsDetailContainer key={idx} join={join} /> )
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
