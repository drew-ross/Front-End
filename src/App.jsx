// Libraries
import React, {useState} from 'react';
import * as yup from 'yup'
import {Switch, Route} from 'react-router-dom'
import axios from 'axios'

// Styles 
import './App.css';
import ValueList from "./components/ValueList";

// Components
import Login from './components/Login'

const formSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, 'username must be at lest 5 characters long')
    .required('a valid username is required'),
  password: yup
    .string()
    .min(6, 'password must be at least 6 characters in length')
    .required('a valid password is required')
})

const url = ''


const initalFormValues = {
  username: '',
  password: '',
}

const initalFormErros = {
  ...initalFormValues
}

function App() {
  const [formValues, setFormValues] = useState(initalFormValues)
  const [formErrors, setFormErrors] = useState(initalFormErros)
  const [user, setUser] = useState({})

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

  const postUser = user => {
    axios.post(url, user)
    .then(res => {
        setUser(res.data)
    })
    .catch(err => {
      debugger
    })
  }

  // const signUpHandler = evt => {
  //   evt.preventDefault()

  //   const newUser =  
  //   console.log(formValues)
  // }

  return (
    <Switch>
      <Route path='/'>
        <Login 
          formValues={formValues}
          onChangeHandler={onChangeHandler}
          // onSubmitHandler={onSubmitHandler}
          signU
          formErrors={formErrors}
        />
      </Route>
    </Switch>
  )
}

export default App;
