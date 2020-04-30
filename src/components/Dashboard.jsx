import React,{ Component, useContext } from 'react';
import DashboardCard from './DashboardCard';
import { connect } from 'react-redux';
import {ValuesContext} from "../contexts/index";




const Dashboard = props => {
    console.log("value", props.values);

    const {selected} = useContext(ValuesContext);
    console.log("selected", selected);


    return (
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
    )
}


export default Dashboard;