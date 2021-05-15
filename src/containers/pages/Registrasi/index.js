import React, { Component } from "react";
import "./Registrasi.css";
import firebase from "../../../config/firebase/firebase";
class Registrasi extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = () => {
    // console.log("email", this.state.email);
    // console.log("password", this.state.password);
    const { email, password } = this.state;
    console.log("before authen", email, password);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        // Signed in
        // var user = userCredential.user;
        // ...

        console.log("success", res);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..

        console.log("error", errorCode, errorMessage);
      });
  };
  render() {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <h1 className="auth-title">Registrasi Page</h1>
          <input
            className="input"
            id="email"
            placeholder="Email"
            type="text"
            onChange={this.handleChange}
          />
          <input
            className="input"
            id="password"
            placeholder="Password"
            type="password"
            onChange={this.handleChange}
          />

          <button className="btn" onClick={this.handleSubmit}>
            Register
          </button>
        </div>
        {/* <button>Go to Dashboard</button> */}
      </div>
    );
  }
}

export default Registrasi;
