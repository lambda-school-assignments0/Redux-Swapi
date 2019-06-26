import { FETCH_CHARACTER_START, FETCH_CHARACTER_SUCCESS, FETCH_CHARACTER_FAILURE } from "../actions";

const initialState = {
  characters: [],
  isLoading: false,
  error: ""
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTER_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case FETCH_CHARACTER_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        isLoading: false,
        error: ""
      };
    case FETCH_CHARACTER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
