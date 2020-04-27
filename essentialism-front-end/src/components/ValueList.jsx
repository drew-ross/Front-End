import React, { useContext } from "react";
import ValueCard from "./ValueCard";
import ValueForm from "./ValueForm";
import { ValuesContext } from "../contexts/index";

const ValueList = () => {
    const {data, setData} = useContext(ValuesContext);
    


    return (
        <div>
            <h1>Values</h1>
            {data.map(item => <ValueCard value={item}/>)}
            <ValueForm data = {data} setData = {setData}/>
        </div>
    )
}

export default ValueList;