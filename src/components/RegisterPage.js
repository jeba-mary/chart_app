import React from 'react';
import history from '../history';

class RegisterPage extends React.Component {
  constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };
  }

  handleChange = (event) => {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
    this.setState({
      input
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.validate()){
        console.log(this.state);
        let input = {};
        input["name"] = "";
        input["email"] = "";
        input["password"] = "";
        input["confirm_password"] = "";
        this.setState({input:input});
        history.push('/');
    }

  }

  validate(){

    let input = this.state.input;
    let errors = {};
    let isValid = true;
    if (!input["name"]) {
      isValid = false;
      errors["name"] = "Please enter your name.";
    }
    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
    }

    if (typeof input["email"] !== "undefined") {
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(input["email"])) {
          isValid = false;
          errors["email"] = "Please enter valid email address.";
        }
    }

    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Please enter your password.";
    }

    if (!input["confirm_password"]) {
      isValid = false;
      errors["confirm_password"] = "Please enter your confirm password.";
    }

    if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
      if (input["password"] !== input["confirm_password"]) {
          isValid = false;
          errors["password"] = "Passwords don't match.";
        }
      } 
      this.setState({
        errors: errors
      });
      return isValid;
  }

  render() {
    return (
      <div className="container">
        <h1>RegisterPage</h1>
        <br />
        <form onSubmit={this.handleSubmit} className="col-lg-6 offset-lg-3">
          
          <div className="form-group">
            <input type="text" name="name" value={this.state.input.name} onChange={this.handleChange} className="form-control" placeholder="Enter name" />
            <div className="text-danger">{this.state.errors.name}</div>
          </div>

          <div className="form-group">
            <input type="text" name="email" value={this.state.input.email} onChange={this.handleChange} className="form-control" placeholder="Enter email"  />
            <div className="text-danger">{this.state.errors.email}</div>
          </div>

          <div className="form-group">
            <input type="password" name="password" value={this.state.input.password} onChange={this.handleChange} className="form-control" placeholder="Enter password"  minLength={8} maxLength={10}/>
            <div className="text-danger">{this.state.errors.password}</div>
          </div>
          <div className="form-group">
            <input type="password" name="confirm_password" value={this.state.input.confirm_password} onChange={this.handleChange} className="form-control" placeholder="Enter confirm password"  minLength={8} maxLength={10}/>
            <div className="text-danger">{this.state.errors.confirm_password}</div>
          </div>

          <input type="submit" value="Register" className="btn" />
        </form>
      </div>
    );
  }
}

  

export default RegisterPage;