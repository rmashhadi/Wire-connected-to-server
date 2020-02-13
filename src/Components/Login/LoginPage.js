import React from "react";
import TopMenu from "../GlobalComponents/TopMenu";
import AccountList from "../GlobalComponents/AccountList";
import InputBox from "./InputBox";

class LoginPage extends React.Component {
  render() {
    return (
      <div className="WirePages">
        <div>
          <TopMenu />
        </div>
        <div className="under-menu">
          <AccountList />
          <InputBox name="Log in" />
        </div>
      </div>
    );
  }
}
export default LoginPage;
