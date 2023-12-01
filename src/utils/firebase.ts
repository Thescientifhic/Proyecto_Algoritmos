// Import the functions you need from the SDKs you need
import {
  collection,
  addDoc,
  getDocs,
  where,
  setDoc,
  getFirestore,
  query,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { DataPost } from "../types/post";
import { DataProfile } from "../types/profile";
import { DataImgProfile } from "../types/profileImg";
import { DataMsg } from "../types/message";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { browserSessionPersistence, UserCredential,} from "firebase/auth";import data from "../service/data";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, setPersistence, browserLocalPersistence} from "firebase/auth";

import { getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOPhAvavMNND2shDVA68dZBDWokCQ3cQY",
  authDomain: "data-algoritmos-5e26d.firebaseapp.com",
  projectId: "data-algoritmos-5e26d",
  storageBucket: "data-algoritmos-5e26d.appspot.com",
  messagingSenderId: "1080782283856",
  appId: "1:1080782283856:web:b134f5162151770b379d55",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
const storage = getStorage(app);

const postCollection = collection(db, "post");

// Recupera los datos del post de Firebase
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
  console.log(matchData);
  return matchData;
}

const addPost = async (post: any) => {
  try {
    const where = collection(db, "profileImg");
    await addDoc(where, post);
    console.log("se añadio");
  } catch (error) {
    console.error(error);
  }
};

//Authentification

const createUser = async (email: string,password: string, name: string) => {
  //Primer paso: Crear usuario con auth
  try {
    const userCredential = await createUserWithEmailAndPassword(auth,email,password);
    console.log(userCredential.user);
    //Segundo paso: Agregar la info restante a la db con el id del usuario
    const where = doc(db, "profile", userCredential.user.uid);
    const data = {
      name: name,
    }
    await setDoc(where, data);
    //Tercer paso: Retornar true para dejarlo pasar de pantalla
    return true;
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage);
    alert("Vuelve a intentarlo");
    return false;
  }
}

const loginUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  setPersistence(auth, browserSessionPersistence)
  .then(() => {
    return signInWithEmailAndPassword(auth, email, password);
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });
};

//Storage

const uploadFile = async (file: File) => {
  const storageRef = ref(storage, file.name);
  const res = await uploadBytes(storageRef, file);
  console.log("Se subió la imagen", res);
}

const getProfilePicture = (imgName: any) => {
  return getDownloadURL(ref(storage, `${imgName}`))
  .then((url: string) => {
    return url;
  })
  .catch((error: string) => {
    console.error(error);
  });
}

const getNameProfilePicture = async (id: string) => {
  const docRef = doc(db, "users", id);
  const docSnap = await getDoc(docRef);
  return docSnap.data()?.imgProfile;
}


export default {
  getDataPost,
  getDataProfile,
  addPost,
  getProfilePicture,
  getNameProfilePicture,
  uploadFile,
  getDataImgProfile,
  createUser,
  loginUser,
};

//función para el botón de eliminar
export const updatePost = async (ref: string, state: boolean) => {
  const postRef = doc(db, "post", `${ref}`);
  await updateDoc(postRef, {
    deleted: state,
  });
};

//función para el botón de match
export const addMatch = async (index: number) => {
  const dataPost = await getDataPost();
  const docRef = await addDoc(collection(db, "match"), {
    id: dataPost[index].id,
    img: dataPost[index].img,
    name: dataPost[index].name
  });
}

