import React from "react";
import ProfilePic1 from "../pictures/Toddler1.jpg";
import ProfilePic2 from "../pictures/Toddler2.jpg";
import { connect } from "react-redux";

class AccountList extends React.Component {
  render() {
    return (
      <div className="left">
        <div
          id="Account1Pic"
          style={{ border: "solid", borderColor: this.props.myColors }}
        >
          <img className="my-image" src={ProfilePic1} alt="name" />
        </div>
        <div id="Account2Pic">
          <img className="my-image" src={ProfilePic2} alt="name" />
        </div>
        <button className="add-accounts"></button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    myColors: state.myColors
  };
};
export default connect(mapStateToProps)(AccountList);
