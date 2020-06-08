export const ADD_STARSHIPS = "ADD_STARSHIPS";

// Action Creators
export function addStarships(starships) {
  return {
    type: ADD_STARSHIPS,
    payload: starships,
  };
}

// Reducers
const initialState = [];

function StarshipReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_STARSHIPS:
      return [...action.payload];
    default:
      return state;
  }
}

export default StarshipReducer;
