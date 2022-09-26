import { Component } from "react";

class ArrayMap extends Component {

    constructor() {
        super();
        this.state = {
            users: [
                {
                    id: 1,
                    name: 'Ramesh'
                },
                {
                    id: 2,
                    name: 'Shiwali'
                },
                {
                    id: 3,
                    name: 'Dilip'
                },
                {
                    id: 4,
                    name: 'Kiran'
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <h1>Array Map:</h1>
                {
                    this.state.users.map(
                        (user) => {
                            return <h2 key={user.id}>{user.name}</h2>
                        }
                    )
                }
            </div>
        )
    }
}

export default ArrayMap;