import React, { Component } from "react";

export class TopPeople extends Component {
  render() {
    return (
      <div className="names">
        <span>TOP PEOPLE</span>
        {/* <img src={this.props.picture} /> */}
        <img src="https://www.todaysparent.com/wp-content/uploads/2014/10/your-toddler-23-months-old-1024x576-1534949025.jpg" />
        <span>
          id : {this.props.id} email: {this.props.email}
        </span>
        <p style={{ marginTop: "30px" }}>CONNECTIONS</p>
      </div>
    );
  }
}

export default TopPeople;
