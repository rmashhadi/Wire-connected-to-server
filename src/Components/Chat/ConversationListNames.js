import React from "react";
import { connect } from "react-redux";
import { lastConversation } from "../../action/myActions";
import { getMsgList } from "../../action/myActions";
import axios from "axios";
class ConversationListNames extends React.Component {
  constructor() {
    super();
    this.state = {
      userLastMsg: "",
      userId: "",
      userPic: ""
    };
  }
  ConvRequestANDdispatching() {
    if (this.props.searching === "yes") {
      var data = new FormData();
      data.append("token", window.localStorage.getItem("token"));
      data.append("user_id", this.props.id);
      axios.post("http://click.7grid.ir/conversation/", data).then(res => {
        this.props.dispatch(
          lastConversation(
            this.props.latestMsg,
            this.props.id,
            this.props.picture,
            this.props.email,
            res.data.data.conversation_id
          )
        );
        window.localStorage.setItem(
          "conversationID",
          res.data.data.conversation_id
        );
        console.log(
          "response-convRequest_conversation_id",
          res.data.data.conversation_id
        );
        console.log("response-convRequest", res.data.data);
      });
    } else {
      var data = new FormData();
      data.append("token", localStorage.getItem("token"));
      data.append("conversation_id", this.props.conversation_id);
      data.append("size", 20);
      data.append("date", Math.floor(new Date().getTime() / 1000));
      axios
        .post("http://click.7grid.ir/conversation/details/", data)
        .then(res => {
          this.props.dispatch(getMsgList(res.data.data.messages));
          console.log("response-msgList", res.data.data.messages);
        });
    }
  }
  render() {
    return (
      <div
        onClick={() => this.ConvRequestANDdispatching()}
        className="name-list"
      >
        <img className="list-pics" src={this.props.picture} alt="name" />
        <div className="name-id">
          <span style={{ color: "snow" }}>
            email: {this.props.email} id: {this.props.id}
          </span>
          <span style={{ color: "gray" }}>{this.props.latestMsg}</span>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
});

export default connect(mapDispatchToProps)(ConversationListNames);
