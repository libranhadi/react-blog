import React, { Component } from "react";
import "./Registrasi.css";
import { connect } from "react-redux";
import Button from "../../../components/atom/Button";
import { RegistrasiApi } from "../../../config/redux/action/api";
class Registrasi extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = (e) => {
    // mengubah state target id yaitu email dan password dan menangkap value,
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = async () => {
    //varuable yang dikirim untuk action pada register api
    const { email, password } = this.state;
    // console.log("before authen", email, password);

    // menangkap props dari dispatch dan mengirimkan email dan password ke action
    const res = await this.props
      .registerApi({
        email: email,
        password: password,
      })
      .catch((err) => err);
    if (res) {
      console.log("ngokey");
      this.setState({
        email: "",
        password: "",
      });
    } else {
      console.log("salah");
    }
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
            onClick={this.handleSubmit}
            title={"register"}
            loading={this.props.load}
          />
        </div>
      </div>
    );
  }
}
const stateRedux = (state) => {
  // memanggil loading global
  return {
    load: state.isLoading,
  };
};

const dispatchRedux = (dispatch) => ({
  // menngirimkan parameter data yang berisi email dan password
  registerApi: (data) => dispatch(RegistrasiApi(data)),
});
export default connect(stateRedux, dispatchRedux)(Registrasi);
