import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from '@firebase/app';
import { alreadyLogin, notLoginYet } from '../actions';
import Main from './Main';

class AppInit extends Component {
    componentWillMount() {
        var config = {
            apiKey: "AIzaSyAqU_jzHyvBwgJmk7rf5E1nc973YngDxTI",
            authDomain: "manager-3e9b9.firebaseapp.com",
            databaseURL: "https://manager-3e9b9.firebaseio.com",
            projectId: "manager-3e9b9",
            storageBucket: "manager-3e9b9.appspot.com",
            messagingSenderId: "343244724378"
        };
        firebase.initializeApp(config);

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.alreadyLogin(user);
            }
            else {
                this.props.notLoginYet();
            }
        });
    }

    render() {
        return (
            <Main />
        )
    }

}

export default connect(null, { alreadyLogin, notLoginYet })(AppInit);
