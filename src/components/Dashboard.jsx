import React,{ Component, createContext } from 'react';
import DashboardCard from './DashboardCard';

export const DashContext = createContext();

class Dashboard extends Component {
    state = {
        
    }
    render(){
    return (
        <DashContext.Provider>
        <div className='container-fluid d-flex justify-content-center'>
            <div className='row'>
                <div className='col-md-4'>
                    <DashboardCard imgsrc={''} title={''} para={''}/>
                </div>
                <div className='col-md-4'>
                    <DashboardCard imgsrc={''} title={''} para={''}/>
                </div>
                <div className='col-md-4'>
                    <DashboardCard imgsrc={''} title={''} para={''}/>
                </div>
            </div>
        </div>
        </DashContext.Provider>
    );
  }
}

export default Dashboard;