import React,{Component} from 'react';
import {
    View,
    Text

} from 'react-native';

type Props = {

}

export default class Mine extends  Component<Props>{
    static navigationOptions = ({navigation}) => ({
        headerTitle:'我的',
        headerTintColor:'#fff',
        headerStyle:{
            backgroundColor:global.theme.primaryColor,
        },
        headerTitleStyle:{
            textAlign:'center', flexGrow:1
        }
    })
    render() {
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>我的</Text>
            </View>
        );
    }
}