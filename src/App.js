import React from 'react';
import './App.css';
import CounterComponent from './Counter';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mount: true,
      ignoreProp: 0,
      seed: 30,
      showErrorComponent: false,
    }
  }

  mountCounter = () => this.setState({mount: true});
  unmountCounter = () => this.setState({mount: false});
  ignoreProp = () => this.setState({ignoreProp: Math.random()});
  seedGenerator = () => this.setState({seed: Number.parseInt(Math.random()*100)});
  toggleError = () => this.setState({showErrorComponent: !this.state.showErrorComponent});

  render() {
    return (
      <div>
        <button onClick = {this.mountCounter} disabled = {this.state.mount}>Mount Counter</button>
        <button onClick = {this.unmountCounter} disabled = {!this.state.mount}>Unmount Counter</button>
        <button onClick = {this.ignoreProp}>Ignore Prop</button>
        <button onClick = {this.seedGenerator}>Generate Seed</button>
        <button onClick = {this.toggleError}>Toggle Error</button>
        {this.state.mount ? 
          <CounterComponent 
            ignoreProp = {this.state.ignoreProp}
            seed = {this.state.seed}
            showErrorComponent = {this.state.showErrorComponent}
          /> : 
          null
          }
      </div>
    );
  }
}

export default App;
