import React,{ Component } from 'react';
import DashboardCard from './DashboardCard';

class Dashboard extends Component {
    render(){
    return (
        <div className='container-fluid d-flex justify-content-center'>
            <div className='row'>
                <div className='col-md-4'>
                    <DashboardCard imgsrc={''} para={''}/>
                </div>
                <div className='col-md-4'>
                    <DashboardCard imgsrc={''} para={''}/>
                </div>
                <div className='col-md-4'>
                    <DashboardCard imgsrc={''} para={''}/>
                </div>
            </div>
        </div>
    )
  }
}

export default Dashboard;