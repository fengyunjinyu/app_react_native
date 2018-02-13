import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity
    } from 'react-native';

 class FirstPageComponent extends React.Component{
    /*
    constructor(props){
        super(props);
        this.state = {};
    }
    */


    render(){
        return (
            <View>
                <TouchableOpacity>
                    <Text>点我跳转</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default FirstPageComponent