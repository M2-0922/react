// "rafce" create basic component from snippets
import { useState, useEffect } from 'react';

const StarWars = () => {
    const [starWarsData, setStarWarsData] = useState({});

    useEffect(() => {
        fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setStarWarsData(data);
        });
    },[])
    
    return (
        <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    )
}

export default StarWars