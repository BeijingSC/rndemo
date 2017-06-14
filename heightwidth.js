/**
 * Created by syw on 2017/6/14.
 */
import react { Component } from 'react';
import { AppRegistry , View } from 'react-native';
export default class FixedDimensionnsBasics extends Component{
    render(){
       return (
           <View>
               <View style={{width:50,height:50,backgroundColor:'powderblue'}}/>
               <View style={{width:100,height:100,backgroundColor:'skyblue'}}/>
               <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
           </View>
       );
    }
}
// skip this line if using Create React Native App
AppRegisrty.registerComponent('AwesomeProjext',()=>FixedDimensionnsBasics);

