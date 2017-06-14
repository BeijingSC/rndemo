/**
 * Created by syw on 2017/6/14.
 */
import React from 'react';
import {AppRegistry,StyleSheet,Text,View} from 'react-native';
class LotsOfStyles extends Component{
    render(){
        return(
            <View>
                 <Text style={styles.red}>just red</Text>
                 <Text style={styles.bigblue}>just blue</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
   bigblue :{
       color:'blue',
       fontWeight:'bold',
       fontSize:'30'
   },
   red:{
     color:'red'
   }
});
