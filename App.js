
import React from 'react';
import {StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containers}>
      <View style={styles.text}>
      <Text>1</Text>
      </View>
      <View style={styles.text1}>
      <Text>2</Text>
      </View>
      <View style={styles.text2}>
      <Text>3</Text>
      </View>
      </View>
      <View style={styles.text4}>
        <Text>4</Text>
      </View>
      <View style={styles.text5}>
        <Text>5</Text>
      </View>
      <View style={styles.text6}>
        <View style={styles.text7}>
          <Text>6</Text>
        </View>
        <View style={styles.text8}>
          <Text>7</Text>
        </View>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  containers: {
    width:'100%',
    flexDirection: 'row',
    backgroundColor: '#f0f',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: 20
  },
  text: {
    flex:1,
    width: 100,
    height: 70,
    backgroundColor:'#f0fc',
    alignItems: 'center',
    justifyContent: 'center'

  },
  text1: {
    backgroundColor:'#00f',
    flex: 2,
    width: 100,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center'

  },
  text2: {
    backgroundColor:'#ff0',
    flex: 4,
    width: 100,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center'

  },
  text3: {
    backgroundColor:'#f0f',
    flexDirection: 'column'
  },
  text4:{
    height:70,
    backgroundColor:'#f00',
    alignItems: 'center',
    justifyContent:'center'
  },
  text5:{
    height:70,
    backgroundColor:'#0ff',
    alignItems: 'center',
    justifyContent:'center'
  },
  text6:{
    flex:1,
    width: '100%',
    flexDirection:'row',
    backgroundColor: '#f00',
    alignItems: 'stretch',
    justifyContent: 'center',
    
  },
  text7: {
    backgroundColor:'#ff0',
    flex: 1,
    height:'100',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'

  },
  text8: {
    backgroundColor:'#f0ff',
    flex: 1,
    height:100,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'

  },
});
