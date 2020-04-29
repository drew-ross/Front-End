import React,{ Component, createContext } from 'react';
import DashboardCard from './DashboardCard';
import { connect } from 'react-redux';


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

const mapStateToProps = state => {
    console.log(state);
    return {
        values: state.reducer.values[0]
    }
}


export default connect(mapStateToProps, {})(Dashboard);