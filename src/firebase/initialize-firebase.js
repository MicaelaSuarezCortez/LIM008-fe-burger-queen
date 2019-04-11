  // Initialize Firebase
  export const initializeFirebase = () => {
    const init = {
    apiKey: "AIzaSyA-Oh0BEIT7yXLNu9MprZcxuIkTepoR4dg",
    authDomain: "burgerqueen-fa58f.firebaseapp.com",
    databaseURL: "https://burgerqueen-fa58f.firebaseio.com",
    projectId: "burgerqueen-fa58f",
    storageBucket: "burgerqueen-fa58f.appspot.com",
    messagingSenderId: "458434977735"
  };
  firebase.initializeApp(init);
}
