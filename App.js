/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text} from 'react-native';
import AppNavigator from './src/Index';
import './src/untils/Theme';

type Props = {};
export default class App extends Component<Props> {
  // 构造
    constructor(props) {
      super(props);
      // 初始状态
      this.state = {};
      //属性可以控制不随系统字体缩放
      Text.defaultProps.allowFontScaling = false;
    }
  render() {
    return (
      <AppNavigator />
    );
  }
}
