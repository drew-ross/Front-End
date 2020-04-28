import React, { useState } from "react";

const ValueForm = props => {

    const [newValue, setNewValue] = useState("");

    const handleChange = e => {
        e.preventDefault();
        setNewValue(e.target.value);
        console.log(newValue);
    }

    const addItem = e => {
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

export default ValueForm;