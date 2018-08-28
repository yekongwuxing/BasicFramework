import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity

} from 'react-native';
import Theme from '../untils/Theme';
import {Loading} from "../untils/Loading";

type Props = {

}

export default class Message extends  Component<Props>{
    static navigationOptions = ({navigation}) => ({
        headerTitle:'消息',
        headerTintColor:'#fff',
        headerStyle:{
            backgroundColor:Theme.primaryColor,
        },
        headerTitleStyle:{
            textAlign:'center', flexGrow:1
        }
    })

    hud(type) {
        if (type === 'show') {
            Loading.show()
            setTimeout(function () {
                Loading.hidden()
            }, 5000)
        } else {
            Loading.hidden()
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.text}
                    onPress={() => this.hud('show')}
                >
                    <Text>showHud</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.text}
                    onPress={() => this.hud('hidden')}
                >
                    <Text>hiddenHud</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    text: {
        width: Theme.screenWidth - 40,
        paddingVertical: 6,
        backgroundColor: '#ccc',
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
});