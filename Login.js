import React, { Component } from "react";
import {View,Text,StyleSheet,TouchableHighlight,TextInput,ScrollView,Alert,Image} from "react-native";
import Header from "./Header";   
class Login extends Component {
  static navigationOptions = {
      header: null
  }
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: '',

      };
    }
    Login= () =>{
      if(this.state.username == 'Agas' && this.state.password == 'Agas'){
        this.props.navigation.navigate('Kategori')
      }else{
        Alert.alert('Masukan Username dan Password dengan Benar!!!');
    }
  }
  render() {     
      return (
        <View style={styles.vMain}>
        <ScrollView>            
            <View style={styles.vHeader}>
            <Header header={"Komang Agus Agastia 1715051059"} />
               	<Image source={require("./img/hmj2.png")} stlye={styles.image} />
                   <View style={styles.box1}>
                    <Text>Username</Text>
                  <TextInput
                  style={styles.txtBox1}
                  placeholder="User Name atau Email"  
                  onChangeText={username => this.setState({ username})}
                  />
                </View>
                <View style={styles.box1}>
                <Text>Password</Text>
                  <TextInput
                  style={styles.txtBox1}
                  placeholder="Password"
                  onChangeText={password => this.setState({ password })}
                  />
                </View>
                <View style={styles.box2}>
                  <TouchableHighlight
                  activeOpacity={0.5}
                  style={styles.vButton}
                            onPress={() => this.Login()}>
                  <Text style={styles.txtButton}>LOGIN</Text>
                  </TouchableHighlight>
                </View>   
            </View>
        </ScrollView>
        </View>
        );
      }
  }
   const styles = StyleSheet.create({
    vMain:{
      flex: 1,
      backgroundColor: 'white',
    },
    vHeader: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height:150,
        width:150
    },
    box1: {
        flex: 0.5,
        width: "90%",
        marginTop: 10,
        marginLeft: 2,
        paddingTop: 10,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    txtBox1: {
      width: 250,
      height: 50,
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: '#191970',
      alignItems: 'center',
      justifyContent: 'center', 
    },
    textBox1:{
      color: 'white',
      fontSize: 15,    
    },
    box2: {
      flex: 0.8,
      margin:10,
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    txtButton: {
      textAlign: 'center',
      marginTop: 10,
      color: 'white',
      fontSize: 20,
      width: '100%',
      height: 40, 
    },
    vButton: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#191970',
      borderRadius: 5,
      padding:20,
      margin:20,
      width: '100%',
      height: 50, 
    },
    txtTeks: {
      color: 'black',
      marginLeft:60,
      fontSize: 15,
      marginBottom:10,
    }
});
export default Login;