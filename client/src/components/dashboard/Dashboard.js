import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";




class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };




  render() {
    const { user } = this.props.auth;

    return (    
      <div>
      <h4 style={{fontFamily: "monospace"}} id="sss"><b> Hey there,</b> {user.name.split(" ")[0]} {" "}
                You are logged into {" "}
                <span style={{ fontFamily: "monospace" }}>BoilerFitness</span> app </h4>
      <div style={{ height: "75vh"}} className="container valign-wrapper jiba1">
        
        <div className="row">
          <div className="landing-copy col s12 center-align">
            <h4> 
                <span style={{ fontFamily: "monospace" }}> <b>Check out our chatroom to connect with your peers anonymously </b>
                  <a href="https://cs390xihao.web.app/chat.html">chatroom</a></span> 
                  <span style={{ fontFamily: "monospace" }}> <b> <br /><br />Check out our Daily calorie calculator if you want to calculate your total caloris consumed</b>
                  <a href="https://cs390xihao.web.app/">Calculator</a></span>
            </h4>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
