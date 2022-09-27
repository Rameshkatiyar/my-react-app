import { Component } from "react";

class ArrayMap extends Component {

    constructor() {
        super();
        this.state = {
            users: []
        }
        console.log('Step 1')
    }

    componentDidMount() {
        console.log('Step 3')

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

    render() {
        console.log('Step 2')
        return (
            <div>
                <h1>Array Map:</h1>
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