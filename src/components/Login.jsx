import React from 'react'
import {Route, Switch, useHistory} from 'react-router-dom'

const LoginForm = props => {
    const {
        formValues,
        onChangeHandler,
        onSubmitHandler
    } = props
    return (
        <form onSubmit={onSubmitHandler} name='login'>
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
            <button type='submit'>Login!</button>
        </form>
    )
}

const SignUpForm = props => {
    const {
        formValues,
        onChangeHandler,
        onSubmitHandler
    } = props
    return (
        <form onSubmit={onSubmitHandler} name='register'>
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
            <button type='submit'>Sign Up!</button>
        </form>
    )
}

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
                name='sign-up'
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
            <Route path='/sign-up'>
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