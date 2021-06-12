import Firebase from 'firebase';

const config = {
   apiKey: "AIzaSyB7wxM96Bm1qChLBMJkoYXedijIUAKw918",
    authDomain: "peoplebpo-af999.firebaseapp.com",
    projectId: "peoplebpo-af999",
    storageBucket: "peoplebpo-af999.appspot.com",
    messagingSenderId: "829520503025",
    appId: "1:829520503025:web:09d62fb970a30425e8c950",
    measurementId: "G-HLDRFQ271Y"
  };

Firebase.initializeApp(config);
Firebase.auth = Firebase.auth();
Firebase.db = Firebase.firestore();
export default Firebase; 