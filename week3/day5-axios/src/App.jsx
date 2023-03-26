import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

// import { ChakraProvider } from "@chakra-ui/react";
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Text,
//   Stack,
//   Button,
//   Image,
//   Heading,
//   Divider,
//   ButtonGroup,
// } from "@chakra-ui/react";

import Countries from "./components/Countries/Countries";
import Joke from "./components/Joke/Joke";

import 'bootstrap/dist/css/bootstrap.min.css';
// import {
//   Container,
//   Form,
//   FormGroup,
//   Input,
//   InputGroup,
//   Button,
//   ListGroup,
//   ListGroupItem,
//  } from 'reactstrap';

function App() {
  const [username, setUsername] = useState("andasan");
  const [repositories, setRepositories] = useState([]);

  const fetchRepositories = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );
      console.log(response);
      setRepositories(response.data);
    } catch (error) {
      console.log(`Error fetching respositories: ${error}`);
    }
  };

  return (
    // <ChakraProvider className="App">
    //   {
    //     repositories.map((repo) => {
    //       return (
    //         <Card maxW="sm">
    //         <CardBody>
    //           <Image
    //             src={repo.owner.avatar_url}
    //             alt="Green double couch with wooden legs"
    //             borderRadius="lg"
    //           />
    //           <Stack mt="6" spacing="3">
    //             <Heading size="md">{repo.name}</Heading>
    //             <Text color="blue.600" fontSize="2xl">
    //               {repo.stargazers_count} stars
    //             </Text>
    //           </Stack>
    //         </CardBody>
    //         <Divider />
    //         <CardFooter>
    //           <a href={repo.url}>Go to Repo</a>
    //           {/* <Button variant="solid" colorScheme="blue">
    //             Go to Repo
    //           </Button> */}
    //         </CardFooter>
    //       </Card>
    //       );
    //     })
    //   }
    //   <Button onClick={fetchRepositories}>Fetch</Button>
    // </ChakraProvider>
    <>  
      <Joke />
      {/* <Countries /> */}
    </>
  );
}

export default App;
