import { Component } from "react";

class ArrayMap extends Component {

    constructor() {
        super();
        this.state = {
            users: []
        }
        console.log('Constructor')
    }

    componentDidMount() {
        console.log('componentDidMount')

        fetch('https://jsonplaceholder.typicode.com/users')
        .then((resp) => resp.json())
        .then(
            (usersData) => this.setState(
                () => {return {users: usersData}},
                () => console.log(this.state)
            )
        )
        .catch(
            () => console.log('No data from API.')
        );
    }

    onSearchChange = (event) => {
        const searchValue = event.target.value.toLocaleLowerCase();
        console.log(searchValue);
        const searchUsers = this.state.users.filter(
            (user) => {
                return user.name.toLocaleLowerCase().includes(searchValue);
            }
        );
        if (searchUsers){
            this.setState(() => {return {users: searchUsers}});
        }
    }

    render() {
        console.log('render')
        return (
            <div>
                <input 
                    className="search-box" 
                    type={'search'} 
                    placeholder='Search user...' 
                    onChange={this.onSearchChange}
                />
                <h1>Users:</h1>
                {
                    this.state.users.map(
                        (user) => {
                            return <h2 key={user.id}>{user.id}. {user.name}</h2>
                        }
                    )
                }
            </div>
        )
    }
}

export default ArrayMap;