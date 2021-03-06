/**
 * Created by 97825 on 2018/2/12.
 */
var React = require("react-native");
var {
    StyleSheet,
    TextView,
    View,
    TextInput,
    Image
    } = React;
var WeatherProject = React.createClass({
    getInitialState() {
        return ({
            zip: ''
        });
    },
    _handleTextChange(event) {
        console.log(event.nativeEvent.text);
        this.setState({
            zip: event.nativeEvent.text
        });
    },
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    You input {this.state.zip}.
                </Text>
                <TextInput styles={styles.input} onSubmitEditing={this._handleTextChange} />
            </View>
        );
    }
});

var styles = StyleSheet.createClass({
    container:{
        fles:1,
        justifyContent: 'center',
        alignItems: 'center',
        background: '#f5f6f5',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    input: {
        fontSize: 20,
        borderWidth: 2,
        height:40
    }
});

module.export = WeatherProject;
