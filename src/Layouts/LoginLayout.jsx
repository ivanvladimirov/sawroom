import React, { Component } from 'react';
import { Route } from 'react-router';
import Button from 'material-ui/Button';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import IconButton from 'material-ui/IconButton';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';
import Icon from 'material-ui-icons/AccountCircle';
import Logo from '../Components/Logo/';

class LoginLayout extends Component {
  state = {
    amount: '',
    password: '',
    weight: '',
    showPassword: false
};

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleClickShowPasssword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };
  render() {
    const { classes } = this.props;
    return (
        <div className="LoginLayout">
          <div className="container">
            <div className="header">
              <Logo />
              <div class="heading">SawRoom</div>
              <Icon className="icon">account circle</Icon>
            </div>
            <hr />
            <Input defaultValue="User" className="input" inputProps={{'aria-label': 'Description',}} />

            <InputLabel htmlFor="password">Password</InputLabel>
            <Input id="adornment-password" type={this.state.showPassword ? 'text' : 'password'} value={this.state.password} onChange={this.handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={this.handleClickShowPasssword} onMouseDown={this.handleMouseDownPassword}>
                  {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
            <Button raised className="button">Login</Button>
          </div>
        </div>
    );
  }
}

export default LoginLayout;
