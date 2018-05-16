import React, { Component } from 'react';
import Login from "./containers/Login"
import KeCheng from "./containers/Kecheng"
import Comment from "./containers/Discussion"
import BackEnd from "./containers/Backend"
import CourseStudy from "./containers/CourseStudy"
import SignUp from "./containers/Signup"
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      hash: window.location.hash
    }
  }
  componentDidMount() {
    window.onhashchange = () => {
      this.setState({
        hash: window.location.hash
      });
    }
  }
  render() {
    let tarUrl
    let { hash } = this.state
    switch (hash) {
      case "":
        tarUrl = (
          <Login />
        )
        break
      case "#/kecheng":
        tarUrl = (
          <KeCheng />
        )
        break
      case "#/discussion":
        tarUrl = (
          <Comment />
        )
        break
      case "#/backend":
        tarUrl = (
          <BackEnd />
        )
        break
      case "#/coursestudy":
        tarUrl = (
          <CourseStudy />
        )
        break
      case "#/signup":
        tarUrl = (
          <SignUp />
        )
    }
    return (
      <div className="App">
        {tarUrl}
      </div>
    )
  }
}

export default App;
