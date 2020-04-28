import React, { useState } from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const ValueCard = props => {


    const finalSelect = e => {
        props.dispatch({type: "FINAL_SELECT", payload: props.value })
        
    }

    return (
        <div id="selectCard">
           {props.value.final ? <Card  onClick = {finalSelect} 
            id="toggleOn"
            >
      <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.value.value}
            
          </Typography>
         
        </CardContent>
      </CardActionArea>
      </Card> 
      
      : 


      <Card  onClick = {finalSelect} 
      id="toggleOff"
      >
<CardActionArea>
  
  <CardContent>
    <Typography gutterBottom variant="h5" component="h2">
      {props.value.value}
      
    </Typography>
   
  </CardContent>
</CardActionArea>
</Card>}
            
           
        </div>
    )
}

export default ValueCard;