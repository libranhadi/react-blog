import firebase from "../../firebase/firebase";

// menangkap parameter data yang berisi email dan password user dari page registrasi
export const RegistrasiApi = (data) => (dispatch) => {
  // memberikan loading karena async
  dispatch({
    type: "IS_LOADING",
    value: true,
  });

  return firebase
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
    });
};
