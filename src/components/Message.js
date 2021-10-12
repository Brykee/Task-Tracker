import React, { Component } from 'react';

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Click to recieve a smile!',
    };
  }

  changeMessage() {
    this.setState({
      message: ':)',
    });
  }

  render() {
    return (
      <div className="changeBtn">
        <p>{this.state.message}</p>

        <button onClick={() => this.changeMessage()}>Click Here</button>
      </div>
    );
  }
}

export default Message;
