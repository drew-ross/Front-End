// Libraries
import React, {useState} from 'react';
import * as yup from 'yup'
import {Switch, Route} from 'react-router-dom'

// Styles 
import './App.css';

// Components
import Login from './components/Login'

const loginSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, 'username must be at lest 5 characters long')
    .required('a valid username is required'),
  password: yup
    .string()
    .min(6, 'password must be at least 6 characters in length')
    .required('a valid password is required')
})


const initalLoginValues = {
  username: '',
  password: '',
}

const initalFormErros = {
  ...initalLoginValues
}

function App() {
  const [loginValues, setLoginValues] = useState(initalLoginValues)
  const [finalValues, setFinalValues] = useState(initalLoginValues)
  const [formErrors, setFormErrors] = useState(initalFormErros)

  const onChangeHandler = evt => {
    const name = evt.target.name
    const value = evt.target.value

    yup 
      .reach(loginSchema, name)
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

    setLoginValues({
      ...loginValues,
      [name]:value
    })
  }

  const onSubmitHandler = evt => {
    evt.preventDefault()
    setFinalValues({
      ...loginValues
    })
    console.log(finalValues)
  }

  return (
    <Switch>
      <Route path='/'>
        <Login 
          formValues={loginValues}
          onChangeHandler={onChangeHandler}
          onSubmitHandler={onSubmitHandler}
          formErrors={formErrors}
        />
      </Route>
    </Switch>
  )
}

export default App;
