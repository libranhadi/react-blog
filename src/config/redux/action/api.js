import ActionType from ".";
import firebase, { database } from "../../firebase/firebase";

// menangkap parameter data yang berisi email dan password user dari page registrasi
export const RegistrasiApi = (data) => (dispatch) => {
  // memberikan loading karena async
  dispatch({
    type: "IS_LOADING",
    value: true,
  });

  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((res) => {
        // Signed in
        // var user = userCredential.user;
        // berubah menjadi tidak loading
        dispatch({
          type: "IS_LOADING",
          value: false,
        });
        dispatch({
          type: ActionType.ISLOGIN,
          value: true,
        });
        resolve(true);
        console.log("success", res);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
        console.log("error", errorCode, errorMessage);
        dispatch({
          type: "IS_LOADING",
          value: false,
        });
        dispatch({
          type: ActionType.ISLOGIN,
          value: false,
        });
        reject(false);
      });
  });
};

//login
export const LoginApi = (data) => (dispatch) => {
  // memberikan loading karena async
  dispatch({
    type: "IS_LOADING",
    value: true,
  });

  return new Promise((resolve, reject) => {
    firebase.auth();
    firebase
      .auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then((response) => {
        console.log("success", response);
        // Signed in
        const dataUser = {
          email: response.user.email,
          uid: response.user.uid,
          emailVerified: response.user.emailVerified,
        };
        dispatch({
          type: "IS_LOADING",
          value: false,
        });
        dispatch({
          type: ActionType.ISLOGIN,
          value: true,
        });
        dispatch({
          type: ActionType.USERNAME,
          value: dataUser,
        });
        resolve(true);
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
        dispatch({
          type: "IS_LOADING",
          value: false,
        });
        dispatch({
          type: ActionType.ISLOGIN,
          value: false,
        });
        reject(false);
        console.log("error", errorCode, errorMessage);
      });
  });
};

export const addDataToApi = (data) => (dispatch) => {
  database.ref("/notes" + data.userId).set({
    title: data.title,
    content: data.content,
    date: data.date,
  });
};
