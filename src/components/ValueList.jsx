import React, { useState } from "react";
import ValueCard from "./ValueCard";
import ValueForm from "./ValueForm";
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

    const ValueList = (props) => {

        const { push } = useHistory();
    
        console.log(props.values);
    
    
        const nextPage =  e => {
            e.preventDefault();
            const temp = props.values.filter(value => value.selected === true);
       
    
            if (temp.length < 3) {
                alert("Pick at least three values!")
            }
            else {
                push('/selectedvalues');
            }
    
        }
    
        

    return (
        <div id="valueCont">
            <h1>Which values resonate with you?</h1>
            <ValueForm values={props.values} dispatch={props.dispatch}/>
            <div  id="valueGrid">
           
            {props.values.map(item => <ValueCard value={item} key = {item.id} dispatch = {props.dispatch} />)}


        </div>
        <Button id = "nextButton" color="primary" variant="contained" onClick = {nextPage} >
      Next
    </Button>
            
           
        </div>
    )
};

export default ValueList;