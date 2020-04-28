import React from "react";
import SelectedValueCard from "./SelectedValueCard";
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom';




const ValueList = (props) => {
    console.log("select", props);
    
    const { push } = useHistory();

    return (
        <div id="valueCont">
            <h1>Now, pick your top three values.</h1>
            
            <div id="valueGrid">
           
            {props.values.map(item => 
            {
                if (item.selected === true) {
                   return  <SelectedValueCard value={item} key = {item.id} dispatch = {props.dispatch} />
                }

            }
            )}


        </div>
        <div id =  "backButton">
            <Button id = "nextBackButton"  variant="contained" onClick ={() => {push('/valuelist')}}>
          Back
        </Button>
            <Button id = "nextBackButton"  variant="contained" >
          Next
        </Button>
                
        </div>
           
        </div>
    )
}

export default ValueList;