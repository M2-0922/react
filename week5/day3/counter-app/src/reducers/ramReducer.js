// https://rickandmortyapi.com/api/character

const initialState = {
  characters: [],
  isFetching: false,
  error: "",
};

function ramReducer(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case "FETCH_DATA_SUCCESS":
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      const updatedCharacters = action.payload.data.map((character) => {
        const favoriteCharacter = favorites.find(
          (favCharacter) => favCharacter.id === character.id
        );
        return favoriteCharacter
          ? { ...character, isFavorite: true }
          : character;
      });
      return {
        ...state,
        isFetching: false,
        characters: updatedCharacters,
      };
    case "FETCH_DATA_ERROR":
      return {
        ...state,
        error: action.payload.error,
        isFetching: false,
      };
    case "FETCH_DATA":
      return {
        ...state,
        isFetching: true,
      };
    case "TOGGLE_FAVORITE":
      const updatedFavorites = state.characters.map((character) =>
        character.id === action.payload.id
          ? { ...character, isFavorite: !character.isFavorite }
          : character
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return {
        ...state,
        characters: updatedFavorites,
      };
    default:
      return state;
  }
}

export default ramReducer;
