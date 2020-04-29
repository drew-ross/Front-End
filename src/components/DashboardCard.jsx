import React, { Component } from 'react';
import './DashboardStyle.css';

class DashboardCard extends Component {   
    render() {
    return (
        <div className="card text-center">
            <div className="overflow">
                <img src={''} alt='' className='card-img-topf'/>
            </div>
            <div className='card-body'>
                <h3 className='card-title'>{''}his is where the title of the card will go.</h3>
                <p className='card-text text-secondary'>{''}
                    This is where the text for the card will go. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, repudiandae earum quae quo dolorum natus soluta libero odio recusandae minima.
                </p>
                {/* <link to='/essential-card'> */}
                <a path='/singlecard' className='btn btn-outline-success'>Add Ispiration</a>
                {/* </link> */}
            </div>
        </div>
    )
  }
}

export default DashboardCard;