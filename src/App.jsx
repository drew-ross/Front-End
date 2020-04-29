// Libraries
import React, {useState, useReducer} from 'react';
import * as yup from 'yup'
import {Switch, Route, useHistory} from 'react-router-dom'
import axios from 'axios'

// Styles 
import './App.css';

// Components
import Login from './components/Login'
import ValueList from "./components/ValueList";
import Dashboard from './components/Dashboard';
import SingleCard from './components/SingleCard';
import PrivateRoute from '../src/utils/PrivateRoute';
import ButtonAppBar from '../src/components/Nav';


const formSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'username must be at least 5 characters long')
    .required('a valid username is required'),
  password: yup
    .string()
    .min(5, 'password must be at least 6 characters in length')
    .required('a valid password is required')
})

const baseUrl = 'https://essentialism-bwt.herokuapp.com/api/auth/'

const initalFormValues = {
  username: '',
  password: '',
}

const initalFormErrors = {
  ...initalFormValues
}

function App() {


  const [formValues, setFormValues] = useState(initalFormValues)
  const [formErrors, setFormErrors] = useState(initalFormErrors)
  const [user, setUser] = useState({})

  const history = useHistory()

  const onChangeHandler = evt => {
    const name = evt.target.name
    const value = evt.target.value

    yup 
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: '',
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })

    setFormValues({
      ...formValues,
      [name]:value
    })
  }

  const handleUser = (user, url, endpoint) => {
    console.log(user)
    axios.post(url, user)
    .then(res => {
        console.log(endpoint)
        setUser(res) 
        console.log("user token", res)

        


        if(endpoint === 'register'){
          // FIGURE OUT WHAT TOKEN IS USED FOR NEW USERS (FROM RUDY)
          localStorage.setItem('token', res.data.addedUser.password);
          history.push('/valuelist')
        }
        // if the user is coming from the log in page
        else {
          localStorage.setItem('token', res.data.token);
          history.push('/dashboard') // TEMPORARY WAITING FOR ANDREW!!!! ----- Will route to dashboard
        }
    })
    .catch(err => {
      // debugger
    })
  }

  const onSubmitHandler = evt => {
    const endpoint = evt.currentTarget.name
    evt.preventDefault()

    console.log(endpoint)

    const postPayload = {
      username: formValues.username,
      password: formValues.password
    }

    handleUser(postPayload, `${baseUrl}${endpoint}`, endpoint)
    setFormValues(initalFormValues)
  }

  return (
    <>
    <ButtonAppBar />
    <Switch>

      <Route path='/dashboard'>
        <Dashboard />
      </Route>

      <Route path='/singlecard'>
        <SingleCard />
      </Route>

      
      
        <PrivateRoute path='/valuelist'>
          <ValueList/>
        </PrivateRoute>
       
  
        <PrivateRoute path='/dashboard'>
          <Dashboard />
        </PrivateRoute>
  
        <Route path='/'>
          <Login 
            formValues={formValues}
            onChangeHandler={onChangeHandler}
            onSubmitHandler={onSubmitHandler}
            formErrors={formErrors}
          />
        </Route>
      </Switch>
     </>
  );
}

export default App;
