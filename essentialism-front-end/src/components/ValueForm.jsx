import React, { useState } from "react";

const ValueForm = props => {

    const [newValue, setNewValue] = useState("");

    const handleChange = e => {
        e.preventDefault();
        setNewValue(e.target.value);
        console.log(newValue);
    }

    const addItem = e => {
        props.data.append(newValue);
    }


    return (
        <div>
         <label>
             Add your own value: 
              <input
                type = "text"
                value = {newValue}
                onChange = {handleChange} />
         </label>
          <button onSubmit = {addItem}>Add</button>
        </div>
    )
}

export default ValueForm;