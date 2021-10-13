import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

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

        <Button onClick={() => this.changeMessage()}>Click Here</Button>
      </div>
    );
  }
}

export default Message;
