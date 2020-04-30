import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { axiosWithAuth } from "../utils/axiosAuth";
import {addItem} from "../actions/actions";
import { connect } from 'react-redux';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },

}));

const ValueForm = props => {
  const classes = useStyles();

    const [newValue, setNewValue] = useState("");

    const handleChange = e => {
        e.preventDefault();
        setNewValue(e.target.value);
        console.log(newValue);
    }

    const addItem = e => {
      e.preventDefault();
      const newPost = {
        value: newValue,
        id: Date.now(),
        description: null

      }
      axiosWithAuth()
      .post("https://essentialism-bwt.herokuapp.com/api/values", newPost )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err, "err");
        console.log(props.values);

      })

      props.addItem(newPost);

      
      setNewValue("");
    }


    return (
        <div>
         

         <form  onSubmit={addItem} className={classes.root} noValidate autoComplete="off">
  
  <div id="valueForm">
      <TextField   

       className ={classes.input}id="outlined-basic" label="Add your own value" variant="outlined" 
      type = "text"
      value = {newValue}
      onChange = {handleChange}/>
      {newValue ?  <Button color="primary" id = "button" type ="submit" variant="contained" >
      Add
    </Button> : <Button disabled color="primary" id = "button" type ="submit" variant="contained" >
      Add
    </Button> }
      
  </div>
</form>
        </div>
    )
}

const mapStateToProps = state => {
  console.log(state);
  return {
      values: state.reducer.values[0]
  }
}


export default connect(mapStateToProps, { addItem })(ValueForm);