// Libraries
import React, {useState} from 'react';
import * as yup from 'yup'
import {Switch, Route} from 'react-router-dom'

// Styles 
import './App.css';
import ValueList from "./components/ValueList";

// Components
import Login from './components/Login'
import { ValuesContext } from './contexts';

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

  const [data, setData] = useState(["Athletic Ability", "Arts and Literature", "Creativity", "Independence", "Kindness and Generosity", "Music", "Living in the Moment", "Making a Difference", "Moral Principles", "Sense of Humor", "Nature and the Environment", "Career Success", "Membership in a Social Group", "Community", "Friends and Family"]);

  const [loginValues, setLoginValues] = useState(initalLoginValues)
  const [finalValues, setFinalValues] = useState(initalLoginValues)
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
      <Route exact path='/'>
        <Login 
          formValues={formValues}
          onChangeHandler={onChangeHandler}
          onSubmitHandler={onSubmitHandler}
          formErrors={formErrors}
        />
      </Route>
      <Route path='/valuelist'>
        <ValuesContext.Provider value={{data, setData}}>
        <ValueList />
        </ValuesContext.Provider>
      </Route>
    </Switch>
  )
}

export default App;
