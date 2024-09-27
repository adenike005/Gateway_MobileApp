import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Color } from '../Const/Colors'

const Login = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent:"center", alignItems:"center", display:"flex",}}>
      <Text style={{color:Color.background, fontSize: 30, fontFamily:"LatoBlack"}} onPress={() => navigation.navigate("home")}>Login</Text>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})