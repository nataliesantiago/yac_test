import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD2AOruVqK845vhvRIJxC4NVXvBNHbU5M0",
    authDomain: "yac-test-4e706.firebaseapp.com",
    databaseURL: "https://yac-test-4e706.firebaseio.com",
    projectId: "yac-test-4e706",
    storageBucket: "yac-test-4e706.appspot.com",
    messagingSenderId: "739171685589",
    appId: "1:739171685589:web:b5919a0a0acb694dccbe5c",
    measurementId: "G-K75T18QLND"
};
  
firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();