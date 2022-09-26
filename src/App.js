import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      name: 'Ramesh',
      company: 'Google'
    };
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name}, work at {this.state.company}.
          </p>
          <button onClick={() => {
            this.setState({name: 'Katiyar'})
          }}>Change with object</button>
          <br/>
          <button 
            onClick={() => {
              this.setState(
                () => {
                  return {name: 'RK', company: 'ZM'}
                },
                () => {console.log(this.state)} //Callback function
              );
            }}
          >
            Change with function
          </button>
        </header>
      </div>
    );
  }
}

export default App;
