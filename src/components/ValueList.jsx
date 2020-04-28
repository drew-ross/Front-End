import React from "react";
import ValueCard from "./ValueCard";
import ValueForm from "./ValueForm";

const ValueList = () => {

    const data = ["Athletic Ability", "Arts and Literature", "Creativity", "Independence", "Kindness and Generosity", "Music", "Living in the Moment", "Making a Difference", "Moral Principles", "Sense of Humor", "Nature and the Environment", "Career Success", "Membership in a Social Group", "Community", "Friends and Family"];
        

    return (
        <div>
            <h1>Values</h1>
            {data.map(item => <ValueCard value={item}/>)}
            <ValueForm data = {data}/>
        </div>
    )
}

export default ValueList;