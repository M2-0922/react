// https://rickandmortyapi.com/api/character

const initialState = {
  characters: [],
  locations: [],
  isLoading: false,
  error: null,
};

function ramReducer(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_CHARACTER_DATA_SUCCESSFULL":
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      const updatedCharacters = action.payload.data.map(character => {
        const favoriteCharacter = favorites.find(
          (favorite) => favorite.id === character.id
        );
        return favoriteCharacter ? { ...character, isFavorite: true } : character
      });

      return {
        ...state,
        isLoading: false,
        characters: updatedCharacters
      }
    case "FETCH_LOCATION_DATA_SUCCESSFULL":
      const favorites2 = JSON.parse(localStorage.getItem("favoriteLocations")) || [];
      const updateLocations = action.payload.data.map(location => {
        const favoriteLocation = favorites2.find(
          (favorite) => favorite.id === location.id
        );
        return favoriteLocation ? { ...location, isFavorite: true } : location
      });
      return {
        ...state,
        isLoading: false,
        locations: updateLocations,
      };
    case "FETCH_DATA_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    case "TOGGLE_FAVORITE":
      const updatedFavorites = state.characters.map(character => 
          character.id === action.payload.id 
          ? {...character, isFavorite: !character.isFavorite }
          : character
        );
        console.log(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    
      return {
        ...state,
        characters: updatedFavorites
      }
    case "TOGGLE_FAVORITE_LOCATION":
        const updatedFavoriteLocations = state.locations.map(location => 
          location.id === action.payload.id 
            ? {...location, isFavorite: !location.isFavorite }
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
