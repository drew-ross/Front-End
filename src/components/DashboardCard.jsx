import React from 'react';
import './DashboardStyle.css';

const DashboardCard = (props) => {   
    return (
        <div className="card text-center">
            <div className="overflow">
                <img src={props.imgsrc} alt='' className='card-img-topf'/>
            </div>
            <div className='card-body'>
                <h3 className='card-title'>{props.title}his is where the title of the card will go.</h3>
                <p className='card-text text-secondary'>{props.para}
                    This is where the text for the card will go. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, repudiandae earum quae quo dolorum natus soluta libero odio recusandae minima.
                </p>
                <a href='#' className='btn btn-outline-success'>Button Text</a>
            </div>
        </div>
    )
}

export default DashboardCard;