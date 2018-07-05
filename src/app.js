import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import {Button, Header, Spinner} from "./components/common";
import LoginForm from './components/LoginForm';



class App extends Component {

    state = { loggedIn: null };

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

        firebase.auth().onAuthStateChanged((user) =>{
            if (user){
                this.setState({ loggedIn: true });
            } else{
                this.setState({loggedIn: false});
            }
        });
    }

    renderContent(){
        switch (this.state.loggedIn){
            case true:
                return (
                    <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                    <Button onPress={() => firebase.auth().signOut()}>
                        Log Out
                    </Button>
                    </View>
                );
            case false:
                return <LoginForm/>;
            default:
                return (
                    <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                        <Spinner size="large" />
                    </View>
                );
        }
    }

    render() {
        return(
            <View>
                <Header headerText = "Authentication"/>
                {this.renderContent()}
            </View>
        );
    }
}

export default App;