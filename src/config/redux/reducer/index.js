import ActionType from "../action/index";
const initialState = {
  popup: false,
  isLogin: false,
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
  }
  return state;
};
