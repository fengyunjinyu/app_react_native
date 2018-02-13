import React,{
    View,
    Text,
    TouchableOpacity,
    } from 'react-native';

var FirstPageComponent = require('./FirstPageComponent');

export default class SecondPageComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    _pressButton(){
        const { navigator } = this.props;
        if(navigator){
            navigator.pop();
        }
    }

    render(){
        return (
            <View>
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                    <Text>点我跳转回去</Text>
                </TouchableOpacity>
            </View>
        );
    }
}