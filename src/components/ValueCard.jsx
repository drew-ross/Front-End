import React, { useState } from "react";


const ValueCard = props => {

const select = () => {
    props.selectItem(props.value.id);
}

    return (
        

<div className="value-card card text-center">

<div className='card-body value-card'>
    <h3 className='card-title'> {props.value.value}</h3>
   
    <a href='#' onClick ={select}className='btn btn-outline-success'>Select</a>
</div>
</div>
    )
}

export default ValueCard;
