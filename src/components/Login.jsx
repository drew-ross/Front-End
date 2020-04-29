import React from 'react'
import {Route, Switch, useHistory} from 'react-router-dom'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

const LoginOrSignUp = () => {

    const history = useHistory()

    const newRoute = evt => {
        const name = evt.target.name
        history.push(`/${name}`)
    }
    return (
        <div>
            <button 
                onClick={newRoute}
                name='login'
                >Login</button>
            <button 
                onClick={newRoute}
                name='register'
                >Sign Up</button>
        </div>
    )
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
            <Route path='/register'>
                <SignUpForm
                    formValues={formValues}
                    onChangeHandler={onChangeHandler}
                    onSubmitHandler={onSubmitHandler}
                />
            </Route>
            <Route path='/'>
                <LoginOrSignUp />
            </Route>
        </Switch>
    )
}

export default Login 