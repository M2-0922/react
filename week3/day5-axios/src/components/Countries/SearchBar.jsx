import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

import { 
    ListGroup,
    ListGroupItem
} from "reactstrap"

const SearchBar = ({ placeholder, data}) => {
    const [ filteredData, setFilteredData ] = useState([]);
    const [ wordEntered, setwordEntered ] = useState("");

    const handleFilter = (e) => {
        const searchWord = e.target.value;
        setwordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.name.common.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    const clearInput = () => {
        setFilteredData([]);
        setwordEntered("");
    }

  return (
    <div>
        <div>
            <input 
                type="text"
                placeholder={placeholder}
                value={wordEntered}
                onChange={handleFilter}
            />
            <div>
                {filteredData.length === 0 ? (
                <SearchIcon />
                ):(
                <CloseIcon  onClick={clearInput} />
                )}
            </div>
        </div>
        { filteredData.length != 0 && (
            <ListGroup>
                {filteredData.map((value, key) => {
                    return (
                        <ListGroupItem key={value.cca3}>
                            {value.name.common} {value.flag} - {value.capital}
                        </ListGroupItem>
                    )
                })}
            </ListGroup>
        )}
    </div>
  )
}

export default SearchBar