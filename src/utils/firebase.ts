// Import the functions you need from the SDKs you need
 import { collection, addDoc,getDocs,where, setDoc, getFirestore, query, doc } from "firebase/firestore";
 import { initializeApp } from "firebase/app";
 import {DataPost} from "../types/post";
 import { DataProfile } from "../types/profile";
 import { DataMsg } from "../types/message";
 import { DataImgProfile } from "../types/profileImg";



// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyCOPhAvavMNND2shDVA68dZBDWokCQ3cQY",
   authDomain: "data-algoritmos-5e26d.firebaseapp.com",
   projectId: "data-algoritmos-5e26d",
   storageBucket: "data-algoritmos-5e26d.appspot.com",
   messagingSenderId: "1080782283856",
   appId: "1:1080782283856:web:b134f5162151770b379d55"
 };

// // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);

 const postCollection = collection(db, "post");

// // Recupera los datos del post de Firebase
 export async function getDataPost(): Promise<DataPost[]> {
     const querySnapshot = await getDocs(postCollection);
     const dataPost: DataPost[] = [];
     querySnapshot.forEach((doc) => {
       const post = doc.data() as DataPost;
       dataPost.push(post);
     });
     return dataPost;
   }


 const profileCollection = collection(db, "profile");

 export async function getDataProfile(): Promise<DataProfile[]> {
     const querySnapshot = await getDocs(profileCollection);
     const dataProfile: DataProfile[] = [];
     querySnapshot.forEach((doc) => {
         const profile = doc.data() as DataProfile;
         dataProfile.push(profile);
     });
     return dataProfile;
 }

 const profileImgCollection = collection(db, "profileImg");

 export async function getDataImgProfile(): Promise<DataImgProfile[]> {
     const querySnapshot = await getDocs(profileImgCollection);
     const dataImgProfile: DataImgProfile[] = [];
     querySnapshot.forEach((doc) => {
         const profile = doc.data() as DataImgProfile;
         dataImgProfile.push(profile);
     });
     return dataImgProfile;
 }

 //Pantalla de mensaje
 const matchCollection = collection(db, "match");

 export async function getMatchData(): Promise<DataMsg[]> {
  const querySnapshot = await getDocs(matchCollection);
  const matchData: DataMsg[] = [];
  querySnapshot.forEach((doc) => {
    const match = doc.data() as DataMsg;
    matchData.push(match);
  });
  console.log(matchData)
  return matchData;
}


 const addPost = async (post: any) => {
   try {
     const where = collection(db, "profileImg");
     await addDoc(where,post);
     console.log("se añadio")
     } catch (error) {
     console.error(error);

     }
 }

 export default {
   getDataPost,
   getDataProfile,
   addPost,
   getDataImgProfile,
   getMatchData,

 }