import React,{Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity

} from 'react-native';
import NetworkConnect from '../untils/network/NetworkConnect'


type Props = {

}

export default class Home extends  Component<Props>{
    static navigationOptions = ({navigation}) => ({
        headerTitle:'首页',
        headerTintColor:'#fff',
        headerStyle:{
            backgroundColor:global.theme.primaryColor,
        },
        headerTitleStyle:{//安卓上标题文字居中
            textAlign:'center', flexGrow:1
        }

    })
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    componentDidMount() {
      this.getNetwork()
    }

    getNetwork() {
        let params = new FormData()
        params.append('pagesize',20)
        params.append('pagenum',0)
        NetworkConnect.postRecruitList(params,response => {
            alert(response)
        })
    }

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