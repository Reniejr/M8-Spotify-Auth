import {
  LIKED_SONG,
  REJECTED_SONG,
  SET_USER_DETAILS,
  LOGGED_IN,
  TOGGLE_LIKED_SONG,
} from "./constants";

const userReducer = (
  state = { liked: [], details: {}, login: false },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case LIKED_SONG:
      return { ...state, liked: state.liked.concat(payload) };
    case SET_USER_DETAILS:
      return {
        ...state,
        details: {
          ...state.details,
          username: payload.username,
          password: payload.password,
        },
      };
    case LOGGED_IN:
      return { ...state, login: !state.login };
    case REJECTED_SONG:
      return {
        ...state,
        liked: state.liked.filter((liked) => liked !== payload),
      };
    case TOGGLE_LIKED_SONG:
      return {
        ...state,
        liked: state.liked.some((song) => song.id === payload.id)
          ? state.liked.filter((song) => song.id !== payload.id)
          : state.liked.concat(payload),
      };
    default:
      return state;
  }
};

export default userReducer;
