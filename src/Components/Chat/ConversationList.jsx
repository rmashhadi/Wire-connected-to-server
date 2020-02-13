import React from "react";
import ConversationListNames from "./ConversationListNames";
import { conversationListFromServer } from "../../action/myActions";
import SearchIcon from "@material-ui/icons/Search";
import GroupWorkOutlinedIcon from "@material-ui/icons/GroupWorkOutlined";
import axios from "axios";
import { connect } from "react-redux";
import TopPeople from "./TopPeople";

class ConversationList extends React.Component {
  constructor() {
    super();
    this.state = {
      searching: false,
      chatList: []
    };
  }
  handleSearch(e) {
    this.setState({ searching: e });
    var data = new FormData();
    data.append("token", window.localStorage.getItem("token"));
    data.append("query", e);
    data.append("size", 4);
    axios
      .post("http://click.7grid.ir/explore/search/contacts/", data)
      .then(res => {
        console.log("search res", res.data.data.users);
        this.setState({ chatList: res.data.data.users });
      });
  }
  componentDidMount() {
    axios
      .get("http://click.7grid.ir/conversation/", {
        params: {
          token: localStorage.getItem("token")
        }
      })
      .then(res => {
        console.log("conversationList", res.data.data.conversation_details);
        this.props.dispatch(
          conversationListFromServer(res.data.data.conversation_details)
        );
      })

      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="middle">
        <div className="prefrences-searchbox">
          <div className="prefrences">
            <div></div>
            <span>{this.props.name}</span>
            <img src="https://seed.uno/images/assets/close-icon.png" />
          </div>
          <div className="prefrences-menu">
            <div className="search-box">
              <SearchIcon />
              <input
                onChange={e => this.handleSearch(e.target.value)}
                type="text"
                placeholder="SEARCH BY NAME OR USERNAME"
              />
            </div>
          </div>
        </div>
        <div>
          {this.state.searching == "" && (
            <div>
              <div className="prefrences-menu">
                <a>
                  <GroupWorkOutlinedIcon />
                </a>
                <div className="prefrences-menu-text">
                  <span className="Menu1" href="#">
                    Creat Group
                  </span>
                </div>
              </div>
              <TopPeople
                picture={this.props.picture}
                id={this.props.UserId}
                email={this.props.Email}
                family={this.props.family}
              />

              {this.props.convList.map(name => {
                if (name.users[0].id == window.localStorage.getItem("MyId")) {
                  return (
                    <ConversationListNames
                      id={name.users[1].id}
                      picture={name.picture}
                      latestMsg={name.latestMsg}
                      searching="no"
                      conversation_id={name.id}
                    />
                  );
                } else {
                  return (
                    <ConversationListNames
                      id={name.users[0].id}
                      picture={name.picture}
                      latestMsg={name.latestMsg}
                      searching="no"
                      conversation_id={name.id}
                    />
                  );
                }
              })}
            </div>
          )}
          <div>
            {this.state.searching != "" &&
              this.state.chatList.map(name => {
                return (
                  <ConversationListNames
                    id={name.id}
                    latestMsg={name.latestMsg}
                    email={name.email}
                    searching="yes"
                    picture="data:image/jpeg;base64,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"
                  />
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  Pic: state.Pic,
  UserId: state.UserId,
  lastMsg: state.lastMsg,
  Email: state.Email,
  convList: state.convList
});
const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(ConversationList);
