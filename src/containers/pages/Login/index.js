import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "../../../components/atom/Button";
import { LoginApi } from "../../../config/redux/action/api";
import time from "../../../config/redux/action/username";
class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  changeUserName = () => {
    this.props.changeUser();
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmitLogin = async () => {
    const { email, password } = this.state;
    const login = await this.props
      .loginUser({
        email: email,
        password: password,
      })
      .catch((err) => err);
    if (login) {
      this.setState({
        email: "",
        password: "",
      });
      console.log("login success");
    } else {
      console.log("login failed");
    }
  };
  render() {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <h1 className="auth-title">Login Page</h1>
          <input
            className="input"
            id="email"
            placeholder="Email"
            type="text"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <input
            className="input"
            id="password"
            placeholder="Password"
            type="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          {/* mengirimkan props kepada button */}
          <Button
            onClick={this.handleSubmitLogin}
            title={"register"}
            loading={this.props.load}
          />
        </div>
      </div>
    );
  }
}

const stateRedux = (state) => {
  return {
    pesan: state.popup,
    name: state.userName,
    load: state.isLoading,
  };
};
const dispatchRedux = (dispatch) => ({
  changeUser: () => dispatch(time()),
  // mengirimlan parameter data yang berisi email dan password
  // login user menangkap (data) dan dikirim ke dispatch Login api
  loginUser: (data) => dispatch(LoginApi(data)),
});

export default connect(stateRedux, dispatchRedux)(Login);
// export default connect(stateRedux)(Login);
