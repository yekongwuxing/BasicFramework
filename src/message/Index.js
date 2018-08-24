import React,{Component} from 'react';
import {
    View,
    Text

} from 'react-native';
import Theme from '../untils/Theme';

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
    render() {
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>消息</Text>
            </View>
        );
    }
}