import { useState } from "react";
import FuncSearchBox from "../search-box/func-search-box.component";

const UserDetails = () => {

    const [name, setName] = useState('Ramesh')

    return (
        <div className="App">
            <p>
                Hi {name}.
            </p>
            <button onClick={() => {
                setName('Katiyar')
            }}>Change Name</button>
            <br/>
            <FuncSearchBox/>
        </div>
    );
}

export default UserDetails;