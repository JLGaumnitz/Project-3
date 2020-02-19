import React, { Component } from 'react';
import "./UsernameForm.css";

class UsernameForm extends Component {
 constructor(props) {
   super(props)
   this.state = {
     username: '',
   }
   this.onSubmit = this.onSubmit.bind(this)
   this.onChange = this.onChange.bind(this)
 }

 onSubmit(e) {
   e.preventDefault()
   this.props.onSubmit(this.state.username)
 }

 onChange(e) {
    this.setState({ username: e.target.value })
  }

  render() {
    return (
      <div>
        <div id="container-for-chat-login">
          <br />
          <br />
          <br />
          <h2>What name do you want to use to chat?</h2>
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              placeholder="Your Chat Name"
              onChange={this.onChange}
            />
            <input type="submit" />
          </form>
        </div>
      </div>
    )
  }
}

 export default UsernameForm