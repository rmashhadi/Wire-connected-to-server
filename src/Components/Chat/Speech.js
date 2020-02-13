import React from "react";
import { connect } from "react-redux";

class Speech extends React.Component {
  render() {
    return (
      <div>
        <div className="speech-name">
          <img className="list-pics" src={this.props.picture} />
          <span>{this.props.id}</span>
        </div>
        <div className="speech-text">
          <span>{this.props.message}</span>

          <div className="delivery">
            <span>...</span>
            <span>{this.props.time}</span>
            <span>Delivered</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Speech;
