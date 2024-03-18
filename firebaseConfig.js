import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGTCz8YVcEKU-aC40H3GgmZS4UavLl630",
  authDomain: "dashboard-app-3aec2.firebaseapp.com",
  projectId: "dashboard-app-3aec2",
  storageBucket: "dashboard-app-3aec2.appspot.com",
  messagingSenderId: "653753067173",
  appId: "1:653753067173:web:6c9340be4891025a110f4c",
  measurementId: "G-FVELM435WM",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
