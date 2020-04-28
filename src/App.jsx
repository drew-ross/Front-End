// Libraries
import React, {useState, useReducer} from 'react';
import * as yup from 'yup'
import {Switch, Route} from 'react-router-dom'
// import axios from 'axios'

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
    .min(5, 'username must be at least 5 characters long')
    .required('a valid username is required'),
  password: yup
    .string()
    .min(6, 'password must be at least 6 characters in length')
    .required('a valid password is required')
})

// const url = ''


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
  // const [user, setUser] = useState({})

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

  // const postUser = user => {
  //   axios.post(url, user)
  //   .then(res => {
  //       setUser(res.data)
  //   })
  //   .catch(err => {
  //     debugger
  //   })
  // }

  const onSubmitHandler = evt => {
    evt.preventDefault()
    console.log(formValues)
  }

  return (
    <Switch>
      <Route path='/valuelist'>
       
        <ValueList values = {state.values} dispatch = {dispatch} />
      </Route>

      <Route path='/selectedvalues'>
       
        <SelectedValues values = {state.values} dispatch = {dispatch} />
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
