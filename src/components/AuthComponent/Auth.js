import React, {useState} from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { GoogleLogin } from '@react-oauth/google';
import useStyles from './styles';
import Input from './Input';
import { useDispatch } from 'react-redux';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { signinAction, signupAction } from '../../actions/authActions'




const Auth = () => {
  const initialState = { firstname: '', lastname: '', email: '', password:'', confirmPassword:'' }
  const classes = useStyles();
  const user = false;
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState(initialState)
  const dispatch = useDispatch();
  const navigate = useNavigate(); //replaced history = useHistory()
    
  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)

  const switchMode = () => setIsSignUp((prevIsSignUp) => !prevIsSignUp)

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signupAction(formData, navigate))
      console.log(formData)
    } else {
      dispatch(signinAction(formData, navigate))
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const createOrGetUser = async(response) => {
    const decoded = jwt_decode(response.credential) //decode jwt token
    // console.log('resCred', response.credential);

    const { name, email, picture, sub } = decoded //get the data

    const result = {
      name,
      email,
      picture,
      sub
    }

    const token = response.credential

    //console.log(decoded)
    try {
      dispatch({ type:'AUTH', data: { result, token } }) //dispatches action //all data could be decoded //sub represents the id

      navigate('/');
    } catch (error) {
      console.log(error)
    }

  }


  return (
    <Container component='main' maxWidth='xs'>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant='h5'>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {
              isSignup && (
                <>
                  <Input name='firstname' label='First Name' handleChange={handleChange} half />

                  <Input name='lastname' label='Last Name' handleChange={handleChange} half />
                </>
              )}

              <Input name='email' label='Email Address' handleChange={handleChange} type='email'/>
              <Input name='password' label='password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />

              { isSignup && <Input name='confirmPassword' label='Repeat Password' handleChange={handleChange} type='password'/>}
          </Grid>

          <div>
            {
              //(response) => createOrGetUser(response)
              user ? (
                <div>Logged In</div>
              ) : (
                <GoogleLogin 
                  onSuccess={(response) => createOrGetUser(response)} 

                  onError={() => console.log('error')}
                />
              )}
          </div>

          <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
            {isSignup ? 'Sign Up' : 'Sign In'}
          </Button>
          
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Button onClick={switchMode}>
                { isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth