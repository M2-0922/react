const initialState = {
    characters: [],
    locations: [],
    isLoading: false,
    error: null
}

function ramReducer(state = initialState, action) {
    console.log(action.type);
    switch (action.type) {
        case "FETCH_DATA":
            return {
                ...state,
                isLoading: true,
            }
        case "FETCH_CHARACTER_DATA_SUCCESSFULL":
            const favoriteCharacters = JSON.parse(localStorage.getItem("favoriteCharacters")) || [];
            const updatedCharacters = action.payload.data.map(character => {
                const favoriteCharacter = favoriteCharacters.find((favorite) => 
                    favorite.id === character.id
                );
                return favoriteCharacter ? {...character, isFavorite: true } : character
            });

            return {
                ...state,
                isLoading: false,
                characters: updatedCharacters
            }
        case "FETCH_LOCATION_DATA_SUCCESSFULL":
            const favoriteLocations = JSON.parse(localStorage.getItem("favoriteLocations")) || [];
            const updatedLocations = action.payload.data.map(location => {
                const favoriteLocation = favoriteLocations.find((favorite) =>
                    favorite.id === location.id
                )
                return favoriteLocation ? {...location, isFavorite: true } : location
            })
            return {
                ...state,
                isLoading: false,
                locations: updatedLocations
            }
        case "FETCH_DATA_ERROR":
            return {
                ...state,
                isLoading: false,
                error: action.payload.error,
            }
        case "TOGGLE_FAVORITE_CHARACTER":
            const updatedFavoriteCharacters = state.characters.map(character =>
                character.id === action.payload.id
                ? {...character, isFavorite: !character.isFavorite}
                : character
            );
            console.log(updatedFavoriteCharacters);
            localStorage.setItem("favoriteCharacters", JSON.stringify(updatedFavoriteCharacters));

            return {
                ...state,
                characters: updatedFavoriteCharacters
            }

        case "TOGGLE_FAVORITE_LOCATION":
            const updatedFavoriteLocations = state.locations.map(location =>
                location.id === action.payload.id
                ? {...location, isFavorite: !location.isFavorite}
                : location
            );
            console.log(updatedFavoriteLocations);
            localStorage.setItem("favoriteLocations", JSON.stringify(updatedFavoriteLocations));

            return {
                ...state,
                locations: updatedFavoriteLocations
            }
        default:
            return state;
    }
} 

export default ramReducer;