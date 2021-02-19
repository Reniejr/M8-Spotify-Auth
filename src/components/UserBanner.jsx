import React, { Component } from "react";
import { connect } from "react-redux";
import {Link } from "react-router-dom";
// import { isAuthenticated, logout } from "";


//ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

//ACTIONS IMPORTS

const maptoStateToProps = (state) => state;


export class UserBanner extends Component {
    render() {
        return (
            <div className="liked-song">
      <header>
        <div className="search">

        </div>
        <div className="user">
          <FontAwesomeIcon icon={faUserCircle} />
          {this.props.user.login ? (<><p className="mt-3" style={{color:"whitesmoke"}}>Hi, {this.props.user?.details.username}!</p> <FontAwesomeIcon icon={faChevronDown} /></>) :(<Link to="/login"><p className="mt-3" style={{color:"whitesmoke"}}>Login to see your account</p></Link>) }
          {/* {isAuthenticated() ? (<><p className="mt-3" style={{color:"whitesmoke"}}>Hi, {this.props.user?.details.username}!</p> <FontAwesomeIcon icon={faChevronDown} /></>) :(<Link to="/login"><p className="mt-3" style={{color:"whitesmoke"}}>Login to see your account</p></Link>) } */}
          
        </div>
      </header>
      
    </div>
        )
    }
}

export default connect(maptoStateToProps)(UserBanner)
