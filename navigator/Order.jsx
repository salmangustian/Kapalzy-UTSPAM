import {React, useState} from 'react';
import {Alert, Modal, Pressable, ScrollView, Text, StyleSheet, View, Button, StatusBar, TextInput, Image } from 'react-native';
import Arrow from '../assets/navigate-icon.png'

const Order = ({ navigation, route }) => {
    const {keberangkatan, tujuan, fasilitas, tanggal, waktu} = route.params;
    const [nama, setNama] = useState("");
    const [gender, setGender] = useState("");
    const [umur, setUmur] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    console.log("asd")
    return (
    <ScrollView>
        <View style={styles.container}>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>transfer ke no rek 89183xxxx</Text>
            <Text style={styles.modalText}>BANK BAC</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Selesai</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
            <View style={styles.card}>
                <View style={styles.head}>
                        <Text style={styles.Cardtitle}>Layanan Kapalzy</Text>
                </View>

                <Text style={styles.subJudul}>Detail Pemesanan </Text>

                <View style={styles.SubCard}>
                    <View style={styles.Wrap}>
                        <View style= {styles.cardinModal}>
                            <Text style={styles.dermaga}>{keberangkatan}</Text>
                        </View>

                        <View style= {styles.cardinModal}>
                        <img src={Arrow} alt ="Boat" width="19" height="19"/>
                        </View>

                        <View style= {styles.cardinModal}>
                            <Text style={styles.dermaga}>{tujuan}</Text>
                        </View>
                    </View>
                    
                    <Text style={styles.subJudul}>Jadwal Masuk Pelabuhan </Text>
                    <Text>{tanggal} </Text>
                    <Text>{waktu} </Text>
                    <Text style={styles.subJudul}>Fasilitas </Text> 
                    <Text>{fasilitas} </Text>
                    <View style={styles.line}/>
                    <View style={styles.formInput}>
                        <Text style={styles.TextOnly}>Dewasa x1</Text>
                    </View>
                
                </View>
                <Text style={styles.subJudul}>Detail Pesanan </Text>

                    <Text style={styles.header2}>Nama Lengkap</Text>
                    <Text style={styles.text}>Fulan</Text>

                    <Text style={styles.header2}>Gender</Text>
                    <Text style={styles.text}>Laki-Laki</Text>

                    <Text style={styles.header2}>Umur</Text>
                    <Text style={styles.text}>Dewasa</Text>   

                <View style={styles.tombol}>
                        <Button 
                            color='#ED7D31'
                            title="Submit" 
                            onPress={() => setModalVisible(true)}
                        />
                </View>
                <View style={styles.centeredView}>
      
        <Text style={styles.textStyle}>Show Modal</Text>
    </View>
            </View>


        </View>
    
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBEBEB',
        marginTop: StatusBar.currentHeight || 0,
        alignItems: 'center'
    },
    maininputan: {
        width: '100%',
        flexDirection:'row',
        alignItems: 'center',
        marginBottom:20,
        marginTop:5,
        paddingLeft:10,
        borderWidth:1,
        borderRadius:3,
        borderColor: '#E5E5E5',
        
      },
      header: {
        borderColor: '#E5E5E5',
        color: '#000080',
        fontSize: 30,
        // fontFamily: 'Sans-Serif',
        fontWeight : 'Bold',
      },
      header2: {
        fontWeight:'bold',
        fontSize: 12,
        // fontFamily: 'Sans-Serif',
        color: 'black',
      },
    head: {
        padding:10,
        alignItems: 'center',
    },
    Cardtitle: {
        textAlign: 'center',
        color: '#000080',
        fontSize: 25,
        fontWeight: 'bold',
    },
    card: {
        backgroundColor: '#fff',
        marginTop: 100,
        width: '90%',
        padding:10,
        borderRadius:10,
    },
    SubCard: {
        backgroundColor: '#EBEBEB',
        margin: 'auto',
        marginTop : 10,
        width: '100%',
        padding:20,
        borderRadius:5,
        borderColor: '#E5E5E5',
        borderWidth: 1,
    },
    subJudul: {
        marginTop: 20,
        marginBottom : 10,
        fontWeight: "bold",
    },
    line: {
        borderBottomWidth: 1,
        marginTop: 10,
        borderColor: '#000',
    },
    dermaga: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    tombol: {
        width: '100%',
        flexDirection:'row',
        borderColor: '#E5E5E5',
        alignItems: 'center',
        justifyContent: 'center'
    },
    TextOnly: {
        width: '70%',
        fontWeight:'bold',
        height: 40,
        marginTop: 10,
        justifyContent:'space-between',
    },
    TextOnly2: {
        width: '70%',
        fontWeight:'bold',
        height: 40,
        marginTop: 10,
        justifyContent:'space-between',
        fontSize:17,
    },
    formInput: {
        width: '100%',
        flexDirection:'row',
        borderColor: '#E5E5E5',
        marginBottom:20,
        marginTop:5,
        justifyContent:'space-between',
    },
    Wrap: {
        backgroundColor: '#EBEBEB',
        margin: 'auto',
        width: '100%',
        flexDirection: 'row'
    },
    cardinModal: {
            backgroundColor: '#EBEBEB',
            margin: 'auto',
            width: '30%',
            alignItems:'center',
            height: 40,
    },
    formText: {
        width: '100%',
        flexDirection:'row',
        borderColor: '#E5E5E5',
        marginBottom:20,
        marginTop:5,
        padding:20,
        justifyContent:'space-between',
    },
    formText2: {
        width: '110%',
        flexDirection:'row',
        borderColor: '#E5E5E5',
        marginBottom:20,
        marginTop:5,
        padding:10

    },
    text:{
        width: '100%',
        flexDirection:'row',
        alignItems: 'center',
        marginBottom:20,
        marginTop:5,
        paddingLeft:10,
        borderWidth:1,
        borderRadius:3,
        borderColor: '#E5E5E5',
        fontSize: 12,
        color: '#C0C0C0',
      },
  
      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#ED7D31",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        fontWeight:'bold',
        textAlign: "center"
      }
  });
  
  export default Order;
