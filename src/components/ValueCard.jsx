import React, { useState } from "react";
import {selectItem} from '../actions/actions';
import {connect} from 'react-redux';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const ValueCard = props => {

const select = () => {
   // props.selectItem(props.value.id);
    props.selectItemList(props.value.id);
}

    return (
        <Card id = "valueCard" onClick = {select} 
          
            >
      <CardActionArea>

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.value.value}

          </Typography>

        </CardContent>
      </CardActionArea>
      </Card> 


    )
}

const mapStateToProps = state => {

    return {
        values: state.reducer.values[0]
    }
}


export default connect(mapStateToProps, { selectItem })(ValueCard)