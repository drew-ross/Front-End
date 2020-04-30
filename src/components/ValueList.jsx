import React, { useEffect, useState, useContext } from "react";
import ValueCard from "./ValueCard";
import ValueForm from "./ValueForm";
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { fetchData, selectItem } from '../actions/actions';
import { connect } from 'react-redux';
import { axiosWithAuth } from "../utils/axiosAuth";
import { ValuesContext } from "../contexts";


const ValueList = props => {

    const { push } = useHistory();
   

   
    useEffect(() => {
   


        props.fetchData();
    

    }, [])


   

    const nextPage = e => {
        e.preventDefault();
        push('/dashboard');

    }



    console.log("data", props.values);


    return (

        <div id="valueCont">

            <h1>Which values resonate with you?</h1>
            <ValueForm values={props.values} />
            <div id="valueGrid">

                {props.values?.map(value => {
                    console.log(value)
                    return (
                        <ValueCard value={value} key={value.id} selectItemList={props.selectItemList} />
                    )
                }) }


            </div>
            <Button id="nextButton" color="primary" variant="contained" onClick={nextPage} >
                Next
    </Button>


        </div>
    )
};

const mapStateToProps = state => {
    console.log(state);
    return {
        values: state.reducer.values[0]
    }
}


export default connect(mapStateToProps, { fetchData, selectItem })(ValueList);