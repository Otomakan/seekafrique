import React,{Component} from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '../../../../components/CrossAssets/Button.js'
// import SignUpForm from '../../../components'

import {connect} from 'react-redux'
import signUpFuncs from '../../../../actions/signUpActions.js'


class SignUpComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email:"",
      password:"",
      subscription:"",
      password_confirmation:"",
    };
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(e){
    const target = e.target
      const value = target.value
      const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleSubmit(){
    this.props.dispatch(signUpFuncs.userSignup(this.state))
  }


  render(){
  	const subscriptionTypes = ['free', 'classic','premium']

    return (
    <div className="sign-up-form">
        <Typography variant="title" gutterBottom>
          Sign Up
        </Typography>
        <Errors signUpErrors={this.props.errors}/>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
              onChange={this.handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="password-input"
              label="Password"
              type="password"
              name="password"
              onChange={this.handleInputChange}
              fullWidth
              autoComplete="password"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password-confirmation-input"
              label="Password Confirmation"
              type="password"
              name="password_confirmation"
              onChange={this.handleInputChange}
              fullWidth
              autoComplete="password"
            />
          </Grid>
          <Grid item xs={12}>
             <TextField
              id="select-subscription"
              select
              label="Select"
              name="subscription"
              value={this.state.subscription}
              onChange={this.handleInputChange}
              helperText="Please select your subscription type"
              margin="normal"
            >
             {subscriptionTypes.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
                ))}
             </TextField>
          </Grid>
         
          <Grid item xs={12}>
           <Button title="Sign Up" action={this.handleSubmit.bind(this)}/> 
    
          </Grid>
        </Grid>
      </div>
    )
  }
}

const Errors = (props) =>
  props.signUpErrors
  ?
    props.signUpErrors.length>0
    ? <h3> {props.signUpErrors}</h3>
    : null
  :null

function mapStateToProps(state) {
  console.log(state)
    return state.signupReducer

}
const SignUp = connect(mapStateToProps)(SignUpComponent)
export default SignUp
