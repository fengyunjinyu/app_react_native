import React,{
    View,
    Text,
    TouchableOpacity
    } from 'react-native';

var SecondPageComponent = require("./SecondPageComponent");

export default class FirstPageComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    _pressButtoon(){
        const { navigator} = this.props;
        if (navigator) {
            navigator.push({
                name:'SecondPageComponent',
                component:SecondPageComponent,
            })
        }
    }

    render(){
        return (
            <View>
                <TouchableOpacity onPress={this._pressButtoon.bind(this)}>
                    <Text>点我跳转</Text>
                </TouchableOpacity>
            </View>
        );
    }
}