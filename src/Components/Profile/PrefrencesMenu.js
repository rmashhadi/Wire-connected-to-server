//.middle
import React from "react";
import { connect } from "react-redux";
import TuneRoundedIcon from "@material-ui/icons/TuneRounded";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import DevicesIcon from "@material-ui/icons/Devices";
import DvrRoundedIcon from "@material-ui/icons/DvrRounded";
//import { FaBeer } from 'react-icons/fa';

class PrefrencesMenu extends React.Component {
  render() {
    return (
      <div className="middle">
        <div className="prefrences">
          <div></div>
          <span>PREFERENCES</span>
          <img
            src="https://seed.uno/images/assets/close-icon.png"
            alt="prefrence"
          />
        </div>

        <div className="prefrences-menu">
          <AccountCircleRoundedIcon />
          <div className="prefrences-menu-text">
            <span style={{ color: this.props.myColors }}>Account</span>
          </div>
        </div>
        <div className="prefrences-menu">
          <DevicesIcon />
          <div className="prefrences-menu-text">
            <div className="prefrences-menu">
              <span>Devices</span>
            </div>
          </div>
        </div>
        <div className="prefrences-menu">
          <TuneRoundedIcon />
          <div className="prefrences-menu-text">
            <span>Options</span>
          </div>
        </div>
        <div className="prefrences-menu">
          <DvrRoundedIcon />
          <div className="prefrences-menu-text">
            <span>Audio/Video</span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    myColors: state.myColors
  };
};

export default connect(mapStateToProps)(PrefrencesMenu);
