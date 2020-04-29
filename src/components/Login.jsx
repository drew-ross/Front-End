import React from 'react'
import {Route, Switch, useHistory} from 'react-router-dom'
import {Grid, Button, Container, CssBaseline, Typography, TextField, Link } from '@material-ui/core'
import useStyles from './MaterialStyles'
import LoginForm from './LoginForm'

const Register = props => {
    const {
        formValues,
        onChangeHandler,
        onSubmitHandler,
        history,
    } = props

    const classes = useStyles()

    const newRoute = evt => {
        const name = evt.target.name
        history.push(`/${name}`)
    }

    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Essential App Sign Up
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="username"
                  name="username"
                  value={formValues.username}
                  onChange={onChangeHandler}
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  value={formValues.password}
                  onChange={onChangeHandler}
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={onSubmitHandler}
                name='register'
                >
                Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link name='login' onClick={newRoute}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    )
}

const Login = props => {
    const {
        formValues,
        onChangeHandler,
        onSubmitHandler,
    } = props

    const history = useHistory()

    return (
        <Switch>
            <Route path='/login'>
                <LoginForm
                    formValues={formValues}
                    onChangeHandler={onChangeHandler}
                    onSubmitHandler={onSubmitHandler}
                    history={history}
                />
            </Route>
            <Route path='/'>
                <Register 
                   formValues={formValues}
                   onChangeHandler={onChangeHandler}
                   onSubmitHandler={onSubmitHandler}
                   history={history}
                />
            </Route>
        </Switch>
    )
}

export default Login 