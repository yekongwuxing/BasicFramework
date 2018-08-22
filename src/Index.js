import React,{Component} from 'react';
import {
    StatusBar

} from 'react-native';

import { createStackNavigator,createBottomTabNavigator} from 'react-navigation';
import Home from './home/Index';
import Find from './find/Index';
import Message from './message/Index';
import Mine from './mine/Index';
import FindDetail from './find/FindDetail';
import Theme from "./untils/Theme";
import TabBarItem from './widget/TabBarItem';

const HomeScreen = createStackNavigator({
    Home:{
        screen:Home
    }
});
const FindScreen = createStackNavigator({
    Find:{
        screen:Find
    }});
const MessageScreen = createStackNavigator({
    Message:{
        screen:Message
    }});
const MineScreen = createStackNavigator({
    Mine:{
        screen:Mine
    }
});
/*
*注册tabs
*/
const tabBar = createBottomTabNavigator({
    Home:{
        screen:HomeScreen,
        navigationOptions:({navigation}) => ({
            tabBarLabel:'首页',
            tabBarIcon:({focused,tintColor}) => (
                <TabBarItem focused={focused}
                            tintColor={tintColor}
                            normalImage={require('./images/tabBar/home.png')}
                            selectedImage={require('./images/tabBar/home_light.png')}
                />
            )

        })
    },
    Find:{
        screen:FindScreen,
        navigationOptions:({navigation}) => ({
            tabBarLabel:'发现',
            tabBarIcon:({focused,tintColor}) => (
                <TabBarItem focused={focused}
                            tintColor={tintColor}
                            normalImage={require('./images/tabBar/find.png')}
                            selectedImage={require('./images/tabBar/find_light.png')}
                />
            )

        })
    },
    Message:{
        screen:MessageScreen,
        navigationOptions:({navigation}) => ({
            tabBarLabel:'消息',
            tabBarIcon:({focused,tintColor}) => (
                <TabBarItem focused={focused}
                            tintColor={tintColor}
                            normalImage={require('./images/tabBar/message.png')}
                            selectedImage={require('./images/tabBar/message_light.png')}
                />
            )

        })
    },
    Mine:{
        screen:MineScreen,
        navigationOptions:({navigation}) => ({
            tabBarLabel:'我的',
            tabBarIcon:({focused,tintColor}) => (
                <TabBarItem focused={focused}
                            tintColor={tintColor}
                            normalImage={require('./images/tabBar/mine.png')}
                            selectedImage={require('./images/tabBar/mine_light.png')}
                />
            )

        })
    }

},{
    lazy:true,
    animationEnabled:false,
    tabBarPosition:'bottom',// 显示在底端，android 默认是显示在页面顶端的
    backBehavior:'none',//按 back 键是否跳转到第一个 Tab， none 为不跳转
    tabBarOptions:{
        activeTintColor:global.theme.primaryColor,
        inactiveTintColor:'#999',
        showIcon:true,//android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle:{height:0},//android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
        style:{
            backgroundColor:'#fff'
        },
    }

});

tabBar.navigationOptions = {
    header:null
}
/*
*注册导航
*/
const AppNavigator = createStackNavigator({
    tabBar:{
        screen:tabBar
    },
    FindDetail:{
        screen:FindDetail
    }

},{
    initialRouteName:'tabBar',
    navigationOptions: {
        headerTintColor: global.theme.primaryColor,//设置导航栏颜色
        headerStyle: {backgroundColor: global.theme.primaryColor},//设置导航条的样式，背景色及宽高等
        headerTitleStyle: {alignSelf: 'center',color:'#fff'},//设置导航栏文字样式
        headerBackTitle: null,
        showIcon: true,

    },

})
export default AppNavigator
