import {
  LIKED_SONG,
  REJECTED_SONG,
  SET_USER_DETAILS,
  LOGGED_IN,
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
    default:
      return state;
  }
};

export default userReducer;
