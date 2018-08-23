import React,{Component} from 'react';
import {
    View,
    Text

} from 'react-native';

type Props = {

}

export default class Message extends  Component<Props>{
    static navigationOptions = ({navigation}) => ({
        headerTitle:'消息',
        headerTintColor:'#fff',
        headerStyle:{
            backgroundColor:global.theme.primaryColor,
        }
    })
    render() {
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>消息</Text>
            </View>
        );
    }
}