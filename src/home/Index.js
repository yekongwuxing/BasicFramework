import React,{Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Platform

} from 'react-native';
import NetworkConnect from '../untils/network/NetworkConnect'
import AlertModal from '../widget/AlertModal';
import Theme from '../untils/Theme';

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
                <AlertModal
                    ref={AlertModal => this.AlertModal = AlertModal}
                    message='这是一个自定义弹窗，这是一个自定义弹窗，这是一个自定义弹窗'
                    title = '11111'
                    rightButtonText='确定'
                    //leftButtonText='取消'
                    onRightClick={()=>{
                        this.AlertModal.hide();
                        this.AlertModal.setTitle('haha');
                    }}
                    onLeftClick={()=>{
                        this.AlertModal.hide();
                    }}
                />

                <TouchableOpacity onPress={() => {
                    this.AlertModal.show();
                }} style={{marginTop:30}}>
                    <Text style={{fontSize:20}}>弹出Modal</Text>
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

});
