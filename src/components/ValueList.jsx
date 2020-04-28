import React from "react";
import ValueCard from "./ValueCard";
import ValueForm from "./ValueForm";

const ValueList = () => {

    const data = ["Athletic Ability", "Arts and Literature", "Creativity", "Independence", "Kindness and Generosity", "Music", "Living in the Moment", "Making a Difference", "Moral Principles", "Sense of Humor", "Nature and the Environment", "Career Success", "Membership in a Social Group", "Community", "Friends and Family"];
        

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
}

export default ValueList;