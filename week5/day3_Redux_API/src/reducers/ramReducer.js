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
      const characterFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
      const updatedCharacters = action.payload.data.map(character => {
        const favoriteCharacter = characterFavorites.find(
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
      const locationFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
      const updatedLocations = action.payload.data.map(location => {
        const favoriteLocation = locationFavorites.find(
          (favorite) => favorite.id === location.id
        );
        return favoriteLocation ? { ...location, isFavorite: true } : location
      });
      return {
        ...state,
        isLoading: false,
        locations: updatedLocations
      };
    case "FETCH_DATA_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    case "TOGGLE_CHARACTER_FAVORITE":
      const updatedCharacterFavorites = state.characters.map(character => 
          character.id === action.payload.id 
          ? {...character, isFavorite: !character.isFavorite }
          : character
        );
        console.log(updatedCharacterFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedCharacterFavorites));
      return {
        ...state,
        characters: updatedCharacterFavorites
      }
    case "TOGGLE_LOCATION_FAVORITE":
      const updatedLocationFavorites = state.locations.map(location => 
          location.id === action.payload.id 
          ? {...location, isFavorite: !location.isFavorite }
          : location
        );
        console.log(updatedLocationFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedLocationFavorites));
      return {
        ...state,
        locations: updatedLocationFavorites
      }
    default:
      return state;
  }
}

export default ramReducer;
