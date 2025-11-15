import { createUserWithEmailAndPassword, sendEmailVerification, signInWithPopup, updatePassword, GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './FirebaseConfig';


export const doCreateUserWithEmailAndPassword = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};


export const doSignInWithGoogle = async () => {
 const provider = new GoogleAuthProvider();
 const result = await signInWithPopup(auth, provider)
 return result
};


export const doSignOut = () => {
    return auth.signOut();
}

export const doPasswordChange = (password) => {
    return updatePassword(auth.currentUser, password)
}

export const doPasswordReset = (email) => {
    return updatePassword(auth, email)
}

export const doEmailVerification = () => {
    return sendEmailVerification(auth.currentUser, {
        url: `${window.location.origin}/home`
    })
}