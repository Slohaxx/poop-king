// src/services/authService.ts

import firebase from 'firebase/app';
import 'firebase/auth';

const auth = firebase.auth();

export const registerUser = async (email: string, password: string) => {
    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        return userCredential.user;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const loginUser = async (email: string, password: string) => {
    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        return userCredential.user;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const logoutUser = async () => {
    try {
        await auth.signOut();
    } catch (error) {
        throw new Error(error.message);
    }
};

export const getCurrentUser = () => {
    return auth.currentUser;
};

export const updateUserProfile = async (displayName: string, photoURL: string) => {
    const user = getCurrentUser();
    if (user) {
        try {
            await user.updateProfile({ displayName, photoURL });
            return user;
        } catch (error) {
            throw new Error(error.message);
        }
    } else {
        throw new Error('No user is currently signed in.');
    }
};