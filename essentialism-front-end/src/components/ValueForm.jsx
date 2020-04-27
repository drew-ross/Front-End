import React, { useState } from "react";

const ValueForm = props => {

    const [newValue, setNewValue] = useState("");

    const handleChange = e => {
        e.preventDefault();
        setNewValue(e.target.value);
        console.log(newValue);
    }

    const addItem = e => {
        e.preventDefault();
        props.setData([...props.data, newValue]);
        setNewValue("");
    }


    return (
        <div>
         <form onSubmit={addItem}>
             <label>
                 Add your own value: 
                  <input
                    type = "text"
                    value = {newValue}
                    onChange = {handleChange} />
             </label>
              <button>Add</button>
         </form>
        </div>
    )
}

export default ValueForm;