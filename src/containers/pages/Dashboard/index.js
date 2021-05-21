import React, { Component } from "react";
import { addDataToApi } from "../../../config/redux/action/api";
import { connect } from "react-redux";
import "./Dashboard.css";
class Dashboard extends Component {
  handleSaveNotes = () => {
    alert("simpan");
  };
  render() {
    return (
      <div className="container">
        <div className="input-form">
          <input className="input-title" />
          <textarea className="input-content"></textarea>
          <button className="save-btn">Save</button>
        </div>
        <hr />
        <div className="card-content">
          <p className="title">Title</p>
          <p className="date">Date</p>
          <p className="content">Content Notes</p>
        </div>
      </div>
    );
  }
}
const reduxDispatch = (dispatch) => ({
  saveNotes: dispatch(addDataToApi()),
});
export default connect(null, reduxDispatch)(Dashboard);
