import ActionType from "../action/index";
const initialState = {
  popup: "ladu",
  isLogin: false,
  isLoading: false,
  userName: {},
};
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.POPUP:
      return {
        ...state,
        popup: action.value,
      };
    case ActionType.ISLOGIN:
      return {
        ...state,
        isLogin: action.value,
      };
    case ActionType.USERNAME:
      return {
        ...state,
        userName: action.value,
      };
    case "IS_LOADING":
      return {
        ...state,
        isLoading: action.value,
      };
    default:
      return state;
  }
};
