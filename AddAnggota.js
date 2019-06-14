import React, { Component } from "react";
import {View,Text,StyleSheet,TouchableHighlight,TextInput,ScrollView,} from "react-native";
import Header from "./Header";
 
const axios = require('axios');
class AddPeminjaman extends Component {
    constructor(props) {
        super(props);
        this.state = {
          NIM: '',
          namaAnggota: '',
          jabatan: '',
          ttl: '',
          alamat: '',
          photo: '',
          id_Bidang: '',
      }
  }
  handleSubmit = event => {
    axios.post('https://agas1006.000webhostapp.com/hmjti/tambahAnggota.php', {
        NIM: this.state.NIM,
        namaAnggota: this.state.namaAnggota,
        jabatan: this.state.jabatan,
        ttl: this.state.ttl,
        alamat: this.state.alamat,
        id_Bidang: this.state.id_Bidang 
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}
  render() {   
      return (
        <View style={styles.vMain}>
        <ScrollView>
            <View style={styles.vHeader}>
                <Header header={"Fitur Tambah"} />
               	<View style={styles.box1}>
                  <View style={styles.textBox1}>
                    <Text>NIM</Text>
                  </View>
                  <TextInput
                    style={styles.txtBox1}
                    onChangeText={NIM => this.setState({ NIM })}
                  />
                </View>
                <View style={styles.box1}>
                  <Text>Nama </Text>
                    <TextInput
                      style={styles.txtBox1}
                      onChangeText={namaAnggota => this.setState({ namaAnggota })}
                    />
                </View>
                <View style={styles.box1}>
                  <Text>jabatan</Text>
                    <TextInput
                      style={styles.txtBox1}
                      onChangeText={jabatan => this.setState({ jabatan })}
                    />
                </View>
                <View style={styles.box1}>
                  <Text>TTL</Text>
                    <TextInput
                      style={styles.txtBox1}
                      onChangeText={ttl => this.setState({ ttl })}
                    />
                </View>
                <View style={styles.box1}>
                  <Text>Alamat</Text>
                    <TextInput
                      style={styles.txtBox1}
                      onChangeText={alamat => this.setState({ alamat })}
                    />
                </View>
                <View style={styles.box1}>
                  <Text>ID Bidang</Text>
                    <TextInput
                      style={styles.txtBox1}
                      onChangeText={id_Bidang => this.setState({ id_Bidang })}
                    />
                </View>
                <View style={styles.box2}>
            <TouchableHighlight activeOpacity={0.5} 
                  style={styles.BoxStyle2} onPress={()=> this.props.navigation.navigate('kurs') }>
                  <Text style={styles.txtBox2}>Pilih Foto</Text>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={0.5} 
                style={styles.BoxStyle1} onPress={()=> this.props.navigation.navigate('Main') }>
                <Text style={styles.txtBox2}>Upload</Text>
            </TouchableHighlight>
            </View>
                <View style={styles.box3}>
                  <TouchableHighlight
                  activeOpacity={0.5}
                  style={styles.vButton}
                            onPress={() => {    
                                this.handleSubmit()
                            }}
                  >
                  <Text style={styles.txtButton}>Add Anggota</Text>
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
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
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
        width: 160,
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
    BoxStyle1: {
        borderRadius: 5,
        justifyContent: 'center',
        marginBottom: 30, 
        padding: 20,
        width: '40%',
        height: 30,
        backgroundColor: '#191970',
        marginTop:40,
        margin:10,
    },
    BoxStyle2: {
        borderRadius: 5,
        justifyContent: 'center',
        marginBottom: 30, 
        padding: 20,
        width: '40%',
        height: 30,
        backgroundColor: '#191970',
        marginTop:40,
        margin:10,
    },
    box3: {
        flex: 0.8,
        margin:10,
        marginTop:10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    txtButton: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
    },
    vButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#191970',
        borderRadius: 5,
        padding:20,
        margin:10,
        width: '100%',
        height: 50, 
    },
    txtBox2: {
        color: 'white',
        alignItems: 'center',
        fontSize: 15,
        textAlign: 'center',
    },
    box2: {
        flex: 0.2,
        backgroundColor: 'white',
        margin:10,
        flexDirection: 'row',
    },
    txtTeks: {
        color: 'black',
        fontSize: 18,
        marginBottom:10,
    }
});
export default AddAnggota;