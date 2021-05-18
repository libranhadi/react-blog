import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "../../../components/atom/Button";
import time from "../../../config/redux/action/username";
class Login extends Component {
  changeUserName = () => {
    this.props.changeUser();
  };

  render() {
    return (
      <div>
        <h1>Login Page {this.props.name}</h1>
        {/* <button onClick={this.changeUserName}>Go to Name</button> */}
        <Button
          onClick={this.changeUserName}
          title={"get to Name"}
          loading={this.props.load}
        />
        <button>Go to Dashboard</button>
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
});

export default connect(stateRedux, dispatchRedux)(Login);
// export default connect(stateRedux)(Login);
