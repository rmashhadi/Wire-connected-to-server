import React, { Component } from "react";
import PhotoIcon from "@material-ui/icons/Photo";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import TimerSharpIcon from "@material-ui/icons/TimerSharp";
import FlareSharpIcon from "@material-ui/icons/FlareSharp";
import { conversationList } from "../../action/myActions";
import axios from "axios";
import { connect } from "react-redux";
class Footer extends Component {
  state = {
    txt: ""
  };
  sendMessage() {
    {
      this.state.txt != "" &&
        this.props.dispatch(conversationList(this.state.txt));

      var data = new FormData();
      data.append("token", window.localStorage.getItem("token"));
      data.append("conversation_id", this.props.conversationId);
      data.append("text", this.state.txt);
      axios
        .post("http://click.7grid.ir/conversation/create/", data)
        .then(res => {
          console.log("response-createMsg", res);
        });

      this.setState({ txt: "" });
    }
  }
  render() {
    return (
      <div className="new-message">
        <textarea
          placeholder="TYPE A MESSAGE"
          onFocus={event => (event.target.placeholder = "")}
          onBlur={event => (event.target.placeholder = "TYPE A MESSAGE")}
          onChange={event => this.setState({ txt: event.target.value })}
          value={this.state.txt}
          onKeyPress={e => {
            e.key === "Enter" && this.sendMessage();
          }}
        ></textarea>

        <div className="icon-box" style={{ width: "200px" }}>
          <TimerSharpIcon />
          <PhotoIcon />
          <AttachFileIcon />
          <FlareSharpIcon />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    Pic: state.connectionPicture,
    UserId: state.connectionID,
    lastMsg: state.payload,
    Email: state.connectionEmail,
    conversationId: state.conversationId
  };
};

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
