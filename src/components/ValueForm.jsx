import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


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
        props.dispatch({type: 'ADD_VALUE', payload: newValue});
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
      {newValue &&  <Button  id = "button" type ="submit" variant="contained" >
      Add
    </Button> }
      
  </div>
</form>
        </div>
    )
}

export default ValueForm;