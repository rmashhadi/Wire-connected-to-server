import React from "react";
import Speech from "./Speech";
import SearchIcon from "@material-ui/icons/Search";
import VideocamIcon from "@material-ui/icons/Videocam";
import CallIcon from "@material-ui/icons/Call";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import Footer from "./Footer";
import { connect } from "react-redux";
import axios from "axios";

class ChatBox extends React.Component {
  constructor() {
    super();
    this.state = {
      MyVisibility: "visible"
    };
  }

  // componentDidMount() {
  //   axios
  //     .post("http://click.7grid.ir/conversation/details/", {
  //       params: {
  //         token: localStorage.getItem("token"),
  //         conversation_id: 1,
  //         size: 4,
  //         date: new Date().getTime() / 1000
  //       }
  //     })
  //     .then(res => {
  //       console.log("msgList", res);
  //     })

  //     .catch(function(error) {
  //       console.log(error);
  //     });
  // }

  handlechange() {
    switch (this.props.UserId) {
      case "":
        return "hidden";

      default:
        return "visible";
    }
  }

  render() {
    return (
      <div className="chat-page">
        <div
          style={{ visibility: this.handlechange() }}
          className="chat-page-top-menu"
        >
          <SearchIcon />
          <span style={{ marginLeft: "90px" }}>
            chatting with id : {this.props.UserId}
          </span>
          <div className="icon-box">
            <VideocamIcon />
            <CallIcon />
            <InfoOutlinedIcon />
          </div>
        </div>

        <div
          style={{ visibility: this.handlechange() }}
          className="connection-profile"
        >
          <h1 style={{ alignSelf: "center" }}>FamilyName</h1>
          <p style={{ alignSelf: "center" }}>@UserName</p>

          <img
            src="https://www.todaysparent.com/wp-content/uploads/2014/10/your-toddler-23-months-old-1024x576-1534949025.jpg"
            alt="name"
          />
        </div>

        <div style={{ visibility: this.handlechange() }} className="time-box">
          <span> </span>
        </div>
        <div className="message-area" style={{ overflow: "auto" }}>
          {this.props.SpeechList.map(messageItem => (
            <Speech
              id={messageItem.sender.id}
              name={messageItem.sender.email}
              message={messageItem.text}
              time={messageItem.date}
            />
          ))}

          {this.props.msgList.map((msg, index) => {
            if (msg.id !== "") {
              return (
                <Speech
                  id={localStorage.MyId}
                  name={msg.name}
                  message={msg.msg}
                  time={msg.time}
                />
              );
            }
          })}
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    Pic: state.Pic,
    UserId: state.UserId,
    lastMsg: state.lastMsg,
    Email: state.Email,
    msgList: state.msgList,
    SpeechList: state.SpeechList
  };
};
export default connect(mapStateToProps)(ChatBox);
