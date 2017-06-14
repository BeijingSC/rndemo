/**
 * Created by syw on 2017/6/14.
 */
import React,{ Component } from 'react';
import { AppRegistry,Text,View } from 'react-native';
class Greeting extends Component{
  render(){
      return (
          <Text> Hello {this.props.name} !</Text>
      )
  }
}
class LotOfGreetings extends Component{
 render(){
   return (
         <View style={{alignItems:'center'}}>
            <Greeting name="AAAA"/>
            <Greeting name="BBBB"/>
            <Greeting name="CCCC"/>
         </View>
       );
 }
}
AppRegistry.registerComponent('LotsOfGreetings',() =>LotsOfGreetings);