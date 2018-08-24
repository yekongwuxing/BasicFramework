import {
    Dimensions,
    Platform
} from 'react-native';

export default module = {
    screenWidth:Dimensions.get('window').width,
    screenHeight:Dimensions.get('window').height,
    statusBarHeight:Platform.OS === 'android' ? 0 : (isIphoneX() ? 44 : 20),
    navigationHeight:Platform.OS === 'android' ? 56 : 44,
    //常用颜色
    primaryColor:'#4eb56c'

}

export function isIphoneX() {
    let dimensions = Dimensions.get('window');
    return(
        Platform.OS === 'ios' &&
        !Platform.isPad &&
        !Platform.isTVOS &&
        (dimensions.height == 812 || dimensions.width == 812)
    );
}

