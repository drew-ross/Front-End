import React from 'react'

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

export default SignUpForm