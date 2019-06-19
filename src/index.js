import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: ''
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    let currentText = event.target.value;
    this.setState({ name: currentText });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let count = this.state.count + 1;
    this.setState({ count })
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input 
            type="text" 
            onChange={this.handleChange}
            ></input>
          </form>
          <div>Name: {this.state.name}</div>
          <div># of Updates: {this.state.count}</div>
        </div>
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
