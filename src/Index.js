import React,{Component} from 'react';
import {

} from 'react-native';

import { createStackNavigator,createBottomTabNavigator} from 'react-navigation';
import Home from './home/Index';
import Find from './find/Index';
import Message from './message/Index';
import Mine from './mine/Index';
import FindDetail from './find/FindDetail';

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

const tabBar = createBottomTabNavigator({
    Home:{
        screen:HomeScreen,
        navigationOptions:({navigation}) => ({
            tabBarLabel:'首页'

        })
    },
    Find:{
        screen:FindScreen,
        navigationOptions:({navigation}) => ({
            tabBarLabel:'发现'

        })
    },
    Message:{
        screen:MessageScreen,
        navigationOptions:({navigation}) => ({
            tabBarLabel:'消息'

        })
    },
    Mine:{
        screen:MineScreen,
        navigationOptions:({navigation}) => ({
            tabBarLabel:'我的'

        })
    }

},{
    lazy:true,
    animationEnabled:false,
    tabBarPosition:'bottom',// 显示在底端，android 默认是显示在页面顶端的
    backBehavior:'none',//按 back 键是否跳转到第一个 Tab， none 为不跳转
    tabBarOptions:{
        activeTintColor:'#e91e63',
        inactiveTintColor:'#999',
        showIcon:true,//android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle:{height:0},//android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
        style:{backgroundColor:'#fff'},
        labelStyle:{fontSize:15,paddingVertical:20}
    }

});

tabBar.navigationOptions = {
    header:null
}

const AppNavigator = createStackNavigator({
    tabBar:{
        screen:tabBar
    },
    FindDetail:{
        screen:FindDetail
    }

},{
    navigationOptions: {
        headerBackTitle: null,
        headerTintColor: '#333333',
        showIcon: true,
    },

})
export default AppNavigator
