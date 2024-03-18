// _app.js
import { useEffect } from "react";
import firebase from "firebase/app";
import "firebase/database";
import { firebaseConfig } from "../../firebaseConfig";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Check if Firebase is not already initialized
    if (!firebase.apps.length) {
      // Initialize Firebase with the provided configuration
      firebase.initializeApp(firebaseConfig);
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
