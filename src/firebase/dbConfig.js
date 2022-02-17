
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
    
    
const firebaseConfig = {
        apiKey: "AIzaSyAd3fsxDZwPwu8xKlkoGsg07SPERg6gW_I",
        authDomain: "ecommece-puleio.firebaseapp.com",
        projectId: "ecommece-puleio",
        storageBucket: "ecommece-puleio.appspot.com",
        messagingSenderId: "41599841691",
        appId: "1:41599841691:web:426c7dbaaf07a48f7e1d3e",
        measurementId: "G-S9RGPVNJ2H"
        };
    
    
    const app = initializeApp(firebaseConfig);
    
    export const getFirestoreApp=() =>{
        return app
    }
    const auth = getAuth()
    