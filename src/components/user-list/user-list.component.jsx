import { Component } from "react";
import CardList from "../card-list/card-list.component";
import SearchBox from "../search-box/search-box.component";

class UserList extends Component {

    constructor() {
        super();
        this.state = {
            users: [],
            searchUsers: []
        }
        console.log('Constructor')
    }

    componentDidMount() {
        console.log('componentDidMount')

        fetch('https://jsonplaceholder.typicode.com/users')
        .then((resp) => resp.json())
        .then(
            (usersData) => this.setState(
                () => {return {users: usersData, searchUsers: usersData}},
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
        this.setState(() => {return {searchUsers}});
    }

    render() {
        console.log('render')
        const {searchUsers} = this.state;
        const {onSearchChange} = this;

        return (
            <div>
                <SearchBox className='user-search-box' onChangeHandler={onSearchChange}/>
                <h1>Users:</h1>
                <CardList cards={searchUsers}/>
            </div>
        )
    }
}

export default UserList;