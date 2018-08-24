import React,{Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Platform

} from 'react-native';
import NetworkConnect from '../untils/network/NetworkConnect'
import RNAlertView from '../widget/RNAlertView';
import Theme from '../untils/Theme';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {

}

export default class Home extends  Component<Props>{
    static navigationOptions = ({navigation}) => ({
        headerTitle:'首页',
        headerTintColor:'#fff',
        headerStyle:{
            backgroundColor:Theme.primaryColor,
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

        })
    }

    render() {
        return (
            <View style={styles.container}>

                {this._renderAndroidAlert()}

                <Text style={styles.instructions}>{instructions}</Text>

                <Text style={styles.welcome} onPress={() => this._show()}>
                    点我->弹出框
                </Text>
            </View>
        );
    }

    _renderAndroidAlert() {
        return(
            <RNAlertView ref='alert' conformName={'确定'} cancleName={'取消'}
                         alertTitle={'删除提示'} alertContent={'执行此操作后，将无法关注该联系人，请确认'}
                         comformClik={() => {
                             this._confirm()
                         }}
                         cancelClick={() => {
                             this._cancel()
                         }}
            />
        );

    }

    _show = () => {
        this.refs.alert && this.refs.alert.showDialog();
    }

    _confirm = () => {
        alert('点击了确定')
    };

    _cancel = () => {
        alert('点击了取消')
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
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
