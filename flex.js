/**
 * Created by syw on 2017/6/14.
 */
import React, { Component } from 'react';
import {AppRegistry ,View } from 'react-native';

export default class FlexDimensionsBasics extends Component{
    render(){
       return (
           <View    style={{flex:1}}>
              <View style={{flex:1 ,backgroundColor:'blue'}} />
              <View style={{flex:2 ,backgroundColor:'skyblue'}} />
              <View style={{flex:3 ,backgroundColor:'steelblue'}} />
           </View>
       )
    }
}
AppRegistry.registerComponent('AwsomeProject',()=>FlexDimensionsBasics);


































