import React from 'react'

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

export default LoginForm
