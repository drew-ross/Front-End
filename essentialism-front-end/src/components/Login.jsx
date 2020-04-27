import React from 'react'
import {Route, Switch} from 'react-router-dom'

const LoginForm = props => {
    const {
        formValues,
        onChangeHandler,
        onSubmitHandler
    } = props
    return (
        <form>
            <label htmlFor='username'>
                username: 
                <input
                    name='username'
                    type='text'
                    value={formValues.username}
                    onChange={onChangeHandler}
                />
            </label>
            <label>
                password:
                <input
                    name='password'
                    type='password'
                    value={formValues.password}
                    onChange={onChangeHandler}
                />
            </label>
            <button onClick={onSubmitHandler}>Submit</button>
        </form>
    )
}

const SignUpForm = props => {
    return null
}


const Login = props => {
    const {
        formValues,
        onChangeHandler,
        onSubmitHandler,
    } = props

    return (
        <Switch>
            <Route path='/login'>
                <LoginForm
                    formValues={formValues}
                    onChangeHandler={onChangeHandler}
                    onSubmitHandler={onSubmitHandler}
                />
            </Route>
            <Route path='/sign-up'>
                <SignUpForm />
            </Route>
            <Route path='/'>
                <h1>This will be where you choose to login or signup</h1>
            </Route>
        </Switch>
    )
}

export default Login 