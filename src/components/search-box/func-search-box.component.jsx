import { useState } from "react";

const FuncSearchBox = () => {

    const [searchValue, setSearchValue] = useState('');
    console.log(searchValue);

    const onSearchChange = (event) => {
        const searchKeyword = event.target.value;
        setSearchValue(searchKeyword);
    }

    return (
        <div>
            <input
            placeholder="func search box..."
            className="search-box"
            type={'search'}
            onChange={onSearchChange}
            />
            <br/>
            <h2>{searchValue}</h2>
        </div>
    )
}

export default FuncSearchBox;