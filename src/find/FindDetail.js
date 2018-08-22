import React,{Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity

} from 'react-native';

type Props = {

}

export default class FindDetail extends  Component<Props>{
    static navigationOptions = ({navigation}) => ({
        headerTitle:'详情',
    })
    render() {
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>详情</Text>
            </View>
        );
    }
}