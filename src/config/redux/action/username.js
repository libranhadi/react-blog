import ActionType from "./";

const time = () => {
  return (dispatch) => {
    dispatch({
      type: "IS_LOADING",
      value: true,
    });
    setTimeout(() => {
      dispatch({
        type: "IS_LOADING",
        value: false,
      });
      dispatch({
        type: ActionType.USERNAME,
        value: "shifaa",
      });
    }, 2000);
  };
};
export default time;
