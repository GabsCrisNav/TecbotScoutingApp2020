import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity,Image}from 'react-native';
import tecbot from './tecbotletras.png';
import propTypes from 'prop-types';

export default class States extends Component {

    render() {
    return (
            <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps='handled'>
            <View>
            <Text>{this.props.team}</Text>
            <Text>{this.props.match}</Text>
            <Text>{this.props.pcAuto.inner}</Text>
            <Text>{this.props.pcAuto.outer}</Text>
            <Text>{this.props.pcAuto.drop}</Text>
            <Text>{this.props.pcTeleop.inner}</Text>
            <Text>{this.props.pcTeleop.outer}</Text>
            <Text>{this.props.pcTeleop.drop}</Text>
            <Text>{this.props.pcend}</Text>
            <Text>{this.props.pcdropend}</Text>
            </View>
            </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex :1,
        backgroundColor: '#7aa4f8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    body: {
        backgroundColor: '#7aa4f8',
        width:600,
        height:320,
        alignItems: 'center',
        justifyContent: 'center',
        shadowRadius:6,
        shadowColor: '#000000',
        shadowOpacity: 0.5,
        borderWidth: 1.3,
        borderRadius: 20,
        marginTop: 25,
    },
    teamInfo:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 50,
    },
    teamNumberContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        margin: 3,
    },
    matchInfo:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        margin: 15,
    },
    Text:{
        fontStyle:'normal',
        fontWeight:'bold',
        fontSize: 18
    },
    TextButton:{
        fontStyle:'normal',
        fontWeight:'bold',
        fontSize: 10,
        color: '#000000'
    },
    TextButtonF:{
        fontStyle:'normal',
        fontWeight:'bold',
        fontSize: 10,
        color: '#ffffff'
    },
    start:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        backgroundColor: 'lightblue',
        width: 200,
       height: 20,
    },
    finish:{
        alignItems: 'center',
        justifyContent: 'center',
        shadowRadius:6,
        shadowColor: '#000000',
        shadowOpacity: 0.5,
        borderWidth: 1.3,
        borderRadius: 20,
        marginTop: 7,
        backgroundColor: '#5c5c61',
        width: 80,
       height: 20,
    },
  });
