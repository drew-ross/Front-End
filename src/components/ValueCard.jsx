import React, { useState } from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const ValueCard = props => {


    const itemSelected = e => {
        props.dispatch({type: "SELECT_VALUE", payload: props.value })


    }

    return (
        <div id="card">
             {props.value.selected ? <Card  onClick = {itemSelected} 
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


      <Card  onClick = {itemSelected} 
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
