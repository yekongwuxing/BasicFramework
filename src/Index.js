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
    tabBarOptions:{
        // activeTintColor:Color.primary,
        // inactiveTintColor:Color.gray,
        style:{backgroundColor:'#fff'}
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
