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
import { initialState, reducer } from './reducers/reducer';
import SelectedValues from './components/SelectedValues';

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
  const [state, dispatch] = useReducer(reducer, initialState);
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
        console.log(res)
        console.log(endpoint)
        setUser(res) // user.data.token for token!!
        if(endpoint === 'register'){
          history.push('/valuelist')
        }
        // if the user is coming from the log in page
        else {
          history.push('/dashboard') // TEMPORARY WAITING FOR ANDREW!!!! ----- Will route to dashboard
        }
    })
    .catch(err => {
      // debugger
    })
  }

  const onSubmitHandler = evt => {
    let endpoint = evt.target.id
    evt.preventDefault()
    console.log(endpoint)

    if(endpoint === ''){
      endpoint = 'login'
    }

    console.log(endpoint)

    const postPayload = {
      username: formValues.username,
      password: formValues.password
    }

    handleUser(postPayload, `${baseUrl}${endpoint}`, endpoint)
    setFormValues(initalFormValues)
  }

  return (
    <Switch>
      <Route path='/valuelist'>
        <ValueList values = {state.values} dispatch = {dispatch} />
      </Route>
      <Route path='/selectedvalues'>
        <SelectedValues values = {state.values} dispatch = {dispatch} />
      </Route>
      <Route path='/dashboard'>
        <h1>TEMPORARY DASHBOARD</h1>
        <button onClick={evt => history.push('/')}>GO HOME</button>
      </Route>
      <Route path='/'>
        <Login 
          formValues={formValues}
          onChangeHandler={onChangeHandler}
          onSubmitHandler={onSubmitHandler}
          formErrors={formErrors}
        />
      </Route>
    </Switch>
  )
}

export default App;
