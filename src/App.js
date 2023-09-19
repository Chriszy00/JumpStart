import React, {Component} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { notification } from "antd";
import { ACCESS_TOKEN } from "./constant";
import Login from "./components/common/Login";
import Registration from "./components/common/register";
import LoadingIndicator from "./components/common/LoadingIndicator";
import Membership from "./components/common/member";
import Home from "./components/common/Home";
import "./App.css"
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  // constructor(props) {
  // super(props);
  //   this.state = {
  //     currentUser: null,
  //     isAuthenticated: false,
  //     isLoading: true,
  //   };
  //   this.handleLogout = this.handleLogout.bind(this);
  //   this.loadCurrentUser = this.loadCurrentUser.bind(this);
  //   this.handleLogin = this.handleLogin.bind(this);

  //   notification.config({
  //     placement: "topRight",
  //     top: 70,
  //     duration: 3,
  //   });
  // }

  // componentDidMount() {
  //   this.loadCurrentUser();
  // }

  // handleLogout(
  //   redirectTo = "/",
  //   notificationType = "success",
  //   description = "You're successfully logged out."
  // ) {
  //   localStorage.removeItem(ACCESS_TOKEN);

  //   this.setState({
  //     currentUser: null,
  //     isAuthenticated: false,
  //   });

  //   this.props.history.push(redirectTo);

  //   notification[notificationType]({
  //     message: "JUMPSTART",
  //     description: description,
  //   });
  // }

  // handleLogin() {
  //   notification.success({
  //     message: "JUMPSTART",
  //     description: "You're successfully logged in.",
  //   });
  //   this.loadCurrentUser();
  //   this.props.history.push("/");
  // }

  render() {
    // if (this.state.isLoading) {
    //   return <LoadingIndicator/>;
    // }
    return (
     <Router>
      <Routes>
      <Route path="/login" element={<Login onLogin={this.handleLogin} />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/membership" element={<Membership/>}/>
      <Route path="/home" element={<Home/>}/>


      </Routes>
     </Router>
    );
  }
}

export default App;
