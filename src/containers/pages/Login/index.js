import React, { Component } from "react";
import { connect } from "react-redux";
class Login extends Component {
  render() {
    return (
      <div>
        <h1>Login Page {this.props.pesan}</h1>
        <button>Go to Register</button>
        <button>Go to Dashboard</button>
      </div>
    );
  }
}

const stateRedux = (state) => {
  return {
    pesan: state.popup,
  };
};
export default connect(stateRedux)(Login);
