// import React, { Component } from "react";

// class Back extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       item: [],
//       isLoaded: false
//     };
//   }
//   componentDidMount() {
//     fetch("http://jsonplaceholder.typicode.com/users")
//       .then(res => res.json())
//       .then(json => {
//         this.setState({
//           isLoaded: true,
//           item: json
//         });
//       });
//   }
//   render() {
//     var { isLoaded, item } = this.state;
//     if (!isLoaded) {
//       return <div>Loading...</div>;
//     } else {
//       return (
//         <div>
//           <ul>
//             {item.map(item => (
//               <li key={item.id}>
//                 Name: {item.name}|Email: {item.email}
//               </li>
//             ))}
//           </ul>
//         </div>
//       );
//     }
//   }
// }

// export default Back;

import React, { Component } from "react";
import axios from "axios";

class Back extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      fileUrl: ""
    };
  }

  handleSend1(e) {
    axios
      .post("http://click.7grid.ir/auth/signin/", {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        // window.localStorage.setItem("token", res.data.data.token);
        console.log("response", res);
      })

      .catch(function(error) {
        console.log(error);
      });
  }

  handleSend2() {
    axios
      .post("http://click.7grid.ir/auth/signup/", {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        window.localStorage.setItem("token", res.data.data.token);
        console.log("response", res.data.data.token);
      })

      .catch(function(error) {
        console.log(error);
      });
  }
  handleSend3() {
    axios
      .get("http://click.7grid.ir/conversation/", {
        params: "token"
      })
      .then(res => {
        console.log("response", res.data.data.token);
      })

      // })
      .catch(function(error) {
        console.log(error);
      });
  }
  Sender(e) {
    var reader = new FileReader();

    var url = reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = function name(e) {
      this.setState({ fileUrl: [reader.result] });
    }.bind(this);
    console.log("s", this.state.files);
  }
  // myFile(e) {
  //   var reader = new FileReader();
  //   reader.onload = function(evt) {
  //     console.log("sss", evt.target.result);
  //     // reader.readAsText(e);
  //   };
  // }

  render() {
    return (
      <div>
        <input
          onChange={e => this.setState({ email: e.target.value })}
          placeholder="username"
          type="text"
        />
        <input
          onChange={e => this.setState({ password: e.target.value })}
          placeholder="password"
          type="text"
          onKeyPress={e => {
            e.key === "Enter" && this.handleSend1(e);
          }}
        />
        <button onClick={() => this.uploadhandler()}>Upload</button>
        <button onClick={() => this.handleSend1()}>login</button>

        <input type="file" onLoad={e => this.Sender(e)} />
        {this.state.file !== "" && (
          <img src={this.state.fileUrl} height="200" alt="Image preview..." />
        )}
      </div>
    );
  }
}

export default Back;

// function previewFile() {
//   var preview = document.querySelector('img');
//   var file    = document.querySelector('input[type=file]').files[0];
//   var reader  = new FileReader();

//   reader.addEventListener("load", function () {
//     preview.src = reader.result;
//   }, false);

//   if (file) {
//     reader.readAsDataURL(file);
//   }
// }
