import React from 'react';

class WindowWatcher extends React.Component {
  state = {
    windowWith: window.innerWidth,
  };

  handleResize = () => {
    this.setState({ windowWidth: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentDidUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    return (
      <React.Fragment>
        <h4>Window Width</h4>
        <h1>{this.state.windowWidth}</h1>
      </React.Fragment>
    );
  }
}

export default WindowWatcher;
