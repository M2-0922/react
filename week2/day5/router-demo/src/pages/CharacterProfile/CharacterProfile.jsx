// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import styled from 'styled-components'
// import { Link } from 'react-router-dom'

// const Paragraph = styled.p`
//     color: ${props.}
// `

// const CharacterProfile = () => {
//     const [character, setCharacter ] = useState({});
//     const [loading, setLoading] = useState(true);
//     const { id } =useParams();

//     useEffect(() => {
//         fetch(`https://swapi.dev/api/people/${id}`)
//         .then(res => res.json())
//         .then(data => {
//           console.log(data);
//           setCharacter(data);
//         })
//       }, [])

//       useEffect(() => {
//         setLoading(false)
//       },[character])

//   return (
//     <div>
//         {
//         loading 
//         ? <h1>Loading..</h1>
//         :
//         <div>
//             <Link></Link>
//             <h1>Character Profile</h1>
//             <h2>{character.name}</h2>
//         </div>
//         }
//     </div>
//   )
// }

// export default CharacterProfile