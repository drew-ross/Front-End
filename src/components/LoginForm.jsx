import React from 'react'
import {Grid, Button, Container, CssBaseline, Typography, TextField, Link } from '@material-ui/core'
import useStyles from './MaterialStyles'

const LoginForm = props => {
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

    const tester = evt => {
        evt.preventDefault()
        console.log(evt.target.name)
    }

    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Essential App Login
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
                id='login'
                >
                Login
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link name='' onClick={newRoute}>
                  Need an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    )
}

export default LoginForm
