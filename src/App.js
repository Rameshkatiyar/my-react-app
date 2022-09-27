import { Component } from 'react';
import './App.css';
import UserList from './components/user-list/user-list.component'

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
          <UserList/>
        </header>
      </div>
    );
  }
}

export default App;
