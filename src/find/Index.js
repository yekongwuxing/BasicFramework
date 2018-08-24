import React,{Component} from 'react';
import {
    View,
    StatusBar,
    Platform,
    Text,
    TouchableOpacity

} from 'react-native';

type Props = {
    navigation:any
}

export default class Find extends  Component<Props>{
    static navigationOptions = ({navigation}) => ({
        headerTitle:'发现',
        headerTintColor:'#fff',
        headerStyle:{
            backgroundColor:global.theme.primaryColor
        },
        headerTitleStyle:{
            textAlign:'center', flexGrow:1
        }
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