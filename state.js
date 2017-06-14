/**
 * Created by syw on 2017/6/14.
 */
import React, { Component } from 'react';
import { AppRegistry , Text, View } from 'react-native';

class Blink extends Component{
    constructor(props){
        super(props);
        this.state = { showText:true};

    setInterval(()=>{
      this.state(previousState =>{
         return { showText :!proviousState.showText};
       });
    },1000);
    }
   render(){
        let display = this.state.showText :　this.props.text :' ';
        return (
            <Text>{display}</Text>
        );
   }
}
class BlinkApp extends Component{
    render(){
        return (
            <View>
                 <Blink text = 'I like it'/>
                 <Blink text = 'Do you like it?'/>
                 <Blink text = 'Can you tell me where three?'/>
            </View>
           )
    }
}
AppResistry.registerComponent('BlinkApp',() => BlinkApp);
