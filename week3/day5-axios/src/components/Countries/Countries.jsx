import React, { useState, useEffect } from 'react'
import axios from "axios";
import { 
    Container,
    ListGroup,
    ListGroupItem,
    Input
} from "reactstrap"

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchCountries = async () => {
        try {
            const response = await axios.get("https://restcountries.com/v3.1/all");
            setCountries(response.data);
        } catch (error) {
            console.log(`Error while fetching api: ${error}`);
        }
    }
    fetchCountries();
  }, [])

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCountries = countries.filter((country) => {
    return country.name.common.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <Container>
        <h1>Countries</h1>
        <Input type="text" placeholder="Search" value={searchTerm} onChange={handleSearchTermChange} />
        <ListGroup>
            {
                filteredCountries.map((country) => {
                    return <ListGroupItem key={country.cca3}>{country.name.common} {country.flag} - {country.capital}</ListGroupItem>
                })
            }
        </ListGroup>
    </Container>
  )
}

export default Countries


// import React, { useState, useEffect } from 'react'
// import axios from "axios";
// import { 
//     Container,
//     ListGroup,
//     ListGroupItem
// } from "reactstrap"

// const Countries = () => {
//   const [countries, setCountries] = useState([]);

//   useEffect(() => {
//     const fetchCountries = async () => {
//         try {
//             const response = await axios.get("https://restcountries.com/v3.1/all");
//             setCountries(response.data);
//         } catch (error) {
//             console.log(`Error while fetching api: ${error}`);
//         }
//     }
//     fetchCountries();
//   }, [])

//   return (
//     <Container>
//         <h1>Countries</h1>
//         <ListGroup>
//             {
//                 countries.map((country) => {
//                     return <ListGroupItem key={country.cca3}>{country.name.common} {country.flag} - {country.capital}</ListGroupItem>
//                 })
//             }
//         </ListGroup>
//     </Container>
//   )
// }

// export default Countries