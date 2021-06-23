import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView
} from "react-native";

import db from "../config";
import firebase from "firebase";

import LoginScreen from './LoginScreen';
import MyHeader from '../components/MyHeader';
import HomeScreen from './HomeScreen';

export default class HomeworkScreen extends Component {

    render(){
        return(
            <View>
                <Text>homework screen</Text>
            </View>
        )
    }
}
