import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import VideocamIcon from "@material-ui/icons/Videocam";
import CallIcon from "@material-ui/icons/Call";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

class ChatBoxTopMenu extends React.Component {
  render() {
    return (
      <div className="chat-page">
        <div className="chat-page-top-menu">
          <SearchIcon />
          <span style={{ marginLeft: "90px" }}>
            chatting with somebody
            {/* chatting with id : {this.props.UserId} */}
          </span>
          <div className="icon-box">
            <VideocamIcon />
            <CallIcon />
            <InfoOutlinedIcon />
          </div>
        </div>
        <h1 style={{ alignSelf: "center" }}>FamilyName</h1>
        <p style={{ alignSelf: "center" }}>@UserName</p>
        <img
          src="https://www.todaysparent.com/wp-content/uploads/2014/10/your-toddler-23-months-old-1024x576-1534949025.jpg"
          alt="name"
        />
      </div>
    );
  }
}

export default ChatBoxTopMenu;
