import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';



class App extends Component {

    componentWillMount(){
        firebase.initializeApp(
            {
                apiKey: 'AIzaSyAsQlErAUMyyuFUz7fmNVI5bVqBUmF2pho',
                authDomain: 'authentication-48fdd.firebaseapp.com',
                databaseURL: 'https://authentication-48fdd.firebaseio.com',
                projectId: 'authentication-48fdd',
                storageBucket: 'authentication-48fdd.appspot.com',
                messagingSenderId: '463261166347'
            }
        );
    }

    render() {
        return(
            <View>
                <Header headerText = "Authentication"/>
                <LoginForm/>
            </View>
        );
    }
}

export default App;