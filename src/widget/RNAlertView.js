import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Modal,
    TouchableOpacity
} from 'react-native';
import PropsTypes from 'prop-types'
import Theme from '../untils/Theme';

export default class RNAlertView extends Component{
    //定义静态的属性,可以通过this.props.alertTitle传值
    static propTypes = {
        alertTitle:PropsTypes.string,//标题
        alertContent:PropsTypes.string,//文本内容
        cancelName:PropsTypes.string,//取消
        conformName:PropsTypes.string,//确定
        conformClick:PropsTypes.func,
        cancelClick:PropsTypes.func,


    }
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isShow:false,
            conformName:'确定',
            cancelName:'取消'
        };
      }
    render() {
        if (!this.state.isShow)  {
            return null;
        }else {
            return (
                <Modal visible={this.state.isShow}
                       animationType={'fade'}//显示动画默认none,
                       animationType={() => {

                       }}
                >
                    <View style={styles.containerStyle}>
                        {this.renderMongoliaView()}
                        {this.renderAlertView()}
                    </View>
                </Modal>
            );
        }
    }
    //蒙层背景
    renderMongoliaView () {
        return(
            <TouchableOpacity style={styles.bgContainViewStyle} onPress={() => this.hideAlertView()}>
                <View></View>
            </TouchableOpacity>
        )

    }
    //绘制Alert视图
    renderAlertView() {
        return(
            <View style={styles.alertViewStyle}>
                <View style={styles.titleContainerStyle}>
                    <Text style={styles.titleStyle}>{this.props.alertTitle}</Text>
                </View>
                <View style={styles.contentContainerStyle}>
                    <Text style={styles.contentStyle}>{this.props.alertContent}</Text>
                </View>
                <View style={styles.horizontalLineStyle}/>
                <View style={styles.btnContainerStyle}>
                    <TouchableOpacity style={styles.btnStyle}
                                      onPress={() => {
                                          this.dissmissDialog(0);
                                          this.dissmissDialog();
                                          this.props.cancelClick ? this.props.cancelClick() : null
                                      }}
                    >
                        <Text style={styles.btnTitleStyle}>{this.props.cancelName}</Text>
                    </TouchableOpacity>
                    <View style={styles.verticalLineStyle}/>
                    <TouchableOpacity style={styles.btnStyle}
                                      onPress={() => {
                                          this.dissmissDialog(0);
                                          this.dissmissDialog();
                                          this.props.conformClick ? this.props.conformClick() : null
                                      }}
                    >
                        <Text style={styles.btnTitleStyle}>{this.props.conformName}</Text>
                    </TouchableOpacity>
                </View>


            </View>
        )

    }

    hideAlertView() {
        this.setState({
            isShow: false,
        });
    }

    //显示
    showDialog() {
        this.setState({
            isShow: true,
        })
    }

    //消失弹窗，最好delay0.3秒
    dissmissDialog = (delay) => {
        let duration = delay;
        this.timer = setTimeout(() => {
            this.setState({
                isShow: false,
            });
            this.timer && clearTimeout(this.timer);
        }, duration * 1000);
    }
}

const styles = StyleSheet.create({
    bgContainViewStyle:{
        height: Theme.screenHeight,
        width: Theme.screenWidth,
        position: 'absolute',
        opacity: 0.4,
        backgroundColor: 'rgb(0,0,0)'
    },
    containerStyle:{
        flex:1,
        position:'absolute',
        justifyContent:'center',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    alertViewStyle:{
        backgroundColor:'white',
        borderRadius:10,
        borderWidth:1,
        height:130,
        marginHorizontal:50,
        borderColor:'lightgrey'

    },
    titleContainerStyle:{
        justifyContent:'center',
        alignItems:'center',
        height:30,
        marginHorizontal:15
    },
    titleStyle:{
        fontSize: 18,
        fontWeight: '900'
    },
    contentContainerStyle:{
        justifyContent:'center',
        alignItems:'center',
        height:50

    },
    contentStyle:{
        justifyContent: 'center',
        marginLeft: 20,
        marginRight: 20,
        fontSize: 14,
    },
    horizontalLineStyle:{
        height: 0.5,
        backgroundColor: 'lightgrey'
    },
    btnContainerStyle:{
        flexDirection:'row',
        width:Theme.screenWidth - 100,
        height:48
    },
    verticalLineStyle:{
        height: 50,
        backgroundColor: 'lightgrey',
        width: 0.5

    },
    btnStyle: {
        flex: 1,
        height: 47,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnTitleStyle:{
        fontSize:16,
        color:'#1572fb'
    }

});