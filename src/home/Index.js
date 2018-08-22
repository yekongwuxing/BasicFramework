import React,{Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity

} from 'react-native';

type Props = {

}

export default class Home extends  Component<Props>{
    static navigationOptions = ({navigation}) => ({
        headerTitle:'首页'


    })
    render() {
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity onPress={ () => {
                    this.props.navigation.navigate('FindDetail')

                }}
                >
                    <Text>按钮</Text>
                </TouchableOpacity>
            </View>
        );
    }
}