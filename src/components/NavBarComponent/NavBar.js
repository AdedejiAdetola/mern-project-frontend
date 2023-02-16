import React, { useEffect, useState } from 'react'
import { AppBar, Typography, Grid, Toolbar, Avatar, Button } from '@material-ui/core';
import memoriesImage from '../../images/memories.jpg';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useStyles from './styles'

const NavBar = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile'))); //how to get user from localstorage; 
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    console.log(user);
    const logout = () => {
      dispatch({ type: 'LOGOUT' })
      navigate('/');
      setUser(null);
    }

    useEffect(() => {
      const token = process.env.REACT_APP_PUBLIC_GOOGLE_API_TOKEN || user?.token;
      setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location])

  return (
    <AppBar className={classes.appBar} position='static' color='inherit'>
      <div className={classes.brandContainer}>
        <Typography component={Link} to='/' className={classes.heading} variant='h2' align='center'>Memories</Typography>
          <Grid container justifyContent="flex-start" alignItems="center" >
              <Grid item xs={2} sm={2}>
                  <img className={classes.image} src={memoriesImage} alt='memories' width='100%' />
              </Grid>
          </Grid>  
      </div>
      <Toolbar className={classes.toolbar}>
        {
          user ? (
            
            <div className={classes.profile}>
              <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.picture}>{user?.result.name.charAt(0)}</Avatar>
              
              <Typography className={classes.userName} variant='h6'>{user?.result.name}</Typography>
              <Button variant='contained' className={classes.logout} color='secondary' onClick={logout}>Logout</Button>
            </div>
          ) : (
            <Button component={Link} to='/auth' variant='contained' color='primary'>Sign In</Button>
          )
        }
      </Toolbar>                
    </AppBar>
  )
}

export default NavBar