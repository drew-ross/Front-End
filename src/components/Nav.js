import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const {push} = useHistory();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar color="secondary">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Essentialism
          </Typography>
          <Button color="inherit"
          onClick={() => push('/dashboard')}
          >Home</Button>
          <Button onClick={() => push('/login')}color="inherit">Login</Button>
          <Button onClick={() => push('/sign-up')}color="inherit">Sign Up</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}