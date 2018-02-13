import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    TextInput,
    Button,
    View
    } from 'react-native';

import {StackNavigator} from 'react-navigation';
import FirstPageComponent from './app/FirstPageComponent';
class MyProject extends React.Component {

    constructor(props){
        super(props);
        this.state = {};

    }

    static navigationOptions = {
        title: 'DemoApp'
    };

    render() {
        return (
            <View>
                <Text style={{height:100}}>内容部分</Text>
                <Button title="打开登录界面"
                        onPress={()=> {this.props.navigation.navigate('Chat')}} />

            </View>



        );
    }
}


//集成组件必须集成StaticNavigator ,否则this.props.navigation 提示undefined
const DemoApp = StackNavigator({
    Home: {screen: MyProject},
    Chat: {screen: FirstPageComponent}
});

export default DemoApp
