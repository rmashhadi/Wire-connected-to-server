import React from "react";
import InputBox from "./InputBox";

class SignUp extends React.Component {
  render() {
    return (
      <div className="WirePages" style={{ flexDirection: "row" }}>
        <InputBox name="New account" />
      </div>
    );
  }
}
export default SignUp;
