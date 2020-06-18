import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, ImageBackground, StatusBar, KeyboardAvoidingView} from 'react-native';
 
export default function App() {
   return (

       <ImageBackground
          source={require('./assets/background.jpeg')}
          imageStyle={{resizeMode: 'stretch'}}
          style={{width: '100%', height: '100%'}}>
 
       <StatusBar
          backgroundColor="#0B7600"
          barStyle="light-content"/>

          <KeyboardAvoidingView behavior="null" style={styles.containers}>
 
       <View style={styles.container}>
 
          {/* <Text style={styles.companyName}>AFRICA CLOSET</Text> */}
          <Image source={require('./assets/logo.jpg')} style={{height: 200, width: 150}} />
          <Text style={styles.logoText}>Welcome, Please Sign in</Text>
 
       <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
           placeholder="Username or Email"
           keyboardType="email-address"
           underlineColorAndroid="transparent"
           />
       </View>
 
       <View style={styles.inputContainer}>
         <TextInput style={styles.inputs}
           placeholder="Password"
           secureTextEntry={true}
           underlineColorAndroid='transparent'
           />
       </View>
 
       <TouchableOpacity style={styles.submitButtonText}>
          <Text style={styles.signInText}>Sign In</Text>
       </TouchableOpacity>
 
      </View>
      </KeyboardAvoidingView>
    </ImageBackground>
   );
  }
 
const styles = StyleSheet.create({
  containers: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
  },
  container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
    },
  companyName: {
     margin: 15,
     fontSize: 30,
     marginBottom : 40,
     color : 'blue',
     fontWeight: "bold",
     marginRight: 30,
     marginLeft: 30,
     flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    },
    logoText: {
      color: "#fff",
      fontSize: 25,
      marginBottom: 20
    },
  submitButton: {
     backgroundColor: '#7a42f4',
     padding: 10,
     margin: 15,
     height: 60,
    },
  submitButtonText:{
     color: '#FFFFFF',
     backgroundColor: '#3462FD',
     width:350,
     height:45,
     borderRadius:10,
     justifyContent: 'center',
     alignItems: 'center'
    },
  signInText:{
     color: '#FFFFFF',
     alignItems: 'center'
  },
  inputContainer: {
     borderBottomColor: '#05C203',
     backgroundColor: '#FFFFFF',
     borderRadius:5,
     borderBottomWidth: 1,
     width:350,
     height:45,
     marginBottom:20,
     flexDirection: 'row',
     alignItems:'center'
  },
  inputs:{ 
     height:45,
     marginLeft:16,
     borderBottomColor: '#FFFFFF',
     flex:1,
  },
})