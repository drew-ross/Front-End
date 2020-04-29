import React, { useEffect, useState, useContext } from "react";
import ValueCard from "./ValueCard";
import ValueForm from "./ValueForm";
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { fetchData, selectItem } from '../actions/actions';
import { connect } from 'react-redux';
import {axiosWithAuth} from "../utils/axiosAuth";
import { ValuesContext } from "../contexts";


    const ValueList = props => {

        const { push } = useHistory();
        const [data, setData] = useState([]);

        const {fetchingData, initialState} = useContext(ValuesContext);
        useEffect(() => {
            // fetchingData();
            

          props.fetchData();
            // for some reason can't get this action creator to work :( 
               
            axiosWithAuth()
             .get("https://essentialism-bwt.herokuapp.com/api/values")
         .then(res => {
                setData(res.data);
             })

           // setData(initialState[0]);

         }, [])

        
       // console.log(props.values);
    
        const nextPage =  e => {
            e.preventDefault();
            push('/dashboard');
           
        }

       

console.log("data", data);


    return (

        <div id="valueCont">
            
            <h1>Which values resonate with you?</h1>
            <ValueForm values={props.values} />
            <div  id="valueGrid">

           {data ? data.map(value => {
                return (
                    <ValueCard value = {value} key = {value.id} selectItemList = {props.selectItemList}  />
                )
    }) : null}
           
            
        </div>
        <Button id = "nextButton" color="primary" variant="contained" onClick = {nextPage} >
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