import client from "./client";
import { gql } from "@apollo/client"

export const fetchCharacters = () => async (dispatch) => {
    const query = gql`
        query {
            characters(page:1, filter:{ name: "rick" }) {
                results {
                   id
                   name
                   image
                   status
                   type
                }
            }
        }
    `;

    const response = await client.query({ query });
    const { results } = response.data.characters;

    dispatch({ type: "SET_CHARACTER", payload: results });
}

export const fetchLocations = () => async (dispatch) => {
    const query = gql`
        query{
            locations(filter: { name: "earth" }) {
                results {
                    id
                    name
                    type
                    dimension
                    residents {
                        id
                        name
                    }
                }
            }
        }
    `;

    const response = await client.query({ query });
    const { results } = response.data.locations;

    dispatch({ type: "SET_LOCATION", payload: results });
}

export const fetchEpisodes = () => async (dispatch) => {
    const query = gql`
        query {
            episodes {
                results {
                    id
                    name
                    air_date
                    episode
                }
            }
        }
    `;

    const response = await client.query({query});
    const { results } = response.data.episodes;

    dispatch({ type: "SET_EPISODE", payload: results });
}