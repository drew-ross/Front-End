// Libraries
import React, {useState} from 'react';
import * as yup from 'yup'
import {Switch, Route} from 'react-router-dom'

// Styles 
import './App.css';

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

  const onSubmitHandler = evt => {
    evt.preventDefault()
    console.log(formValues)
  }

  return (
    <Switch>
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
