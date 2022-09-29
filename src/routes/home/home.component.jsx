import { Component } from 'react';
import '../../App.css';
import UserDetails from '../../components/user-details/user-details.component';
import UserList from '../../components/user-list/user-list.component'

class Home extends Component {
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
          <UserList/>
        </header>
      </div>
    );
  }
}

export default Home;
