import {React,useState, useRef} from "react";
import {ScrollView, StyleSheet, Text, Button, View,TextInput, KeyboardAvoidingView, SafeAreaView } from 'react-native';

import Boat from '../assets/boat-icon.jpg'
import Chair from '../assets/chair-icon.png'
import Datee from '../assets/date-icon.png'
import Clock from '../assets/clock-icon.png'
import {Input} from 'react-native-elements';

const Home = ({ navigation }) => {
  const [keberangkatan, setKeberangkatan] = useState("");
  const [tujuan, setTujuan] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [fasilitas, setFasilitas] = useState("");
  const [waktu, setWaktu] = useState("");


  const onsubmit = () => {
    // console.warn(awal, tujuan, fasilitas, tanggal, waktu);
    navigation.navigate('Receipt', {
      keberangkatan: keberangkatan,
      tujuan: tujuan,
      fasilitas: fasilitas,
      tanggal: tanggal,
      waktu: waktu,
    });
    this;
  };


    return(
      <ScrollView>
      <SafeAreaView>
      <KeyboardAvoidingView style={styles.keyboard}>
        <View style={styles.container}>
            <View style={styles.top}>
              <Text style={styles.header}>Layanan Kapalzy</Text>
            </View>
            
            <View style={styles.card}>
            
              
              <Text style={styles.header2}>Dermaga Keberangkatan</Text>
              <View style={styles.maininputan}>
                <img src={Boat} alt ="Boat" width="19" height="19"/>
                <Input
                  style={styles.input}
                  onChangeText={setKeberangkatan}
                  value={keberangkatan}
                  placeholder="Pilih Dermaga Keberangkatan"
                  selectTextOnFocus={false}
                  
                />
              </View>
              
              <Text style={styles.header2}>Dermaga Tujuan</Text>
              <View style={styles.maininputan}>
              <img src={Boat} alt ="Boat" width="19" height="19"/>
                <Input
                  style={styles.input}
                  onChangeText={setTujuan}
                  value={tujuan}
                  placeholder="Pilih Dermaga Tujuan"
                  selectTextOnFocus={false}
                />
              </View>
              
              <Text style={styles.header2}>Tipe Fasilitas</Text>
              <View style={styles.maininputan}>
              <img src={Chair} alt ="Chair" width="19" height="19"/>
                <Input
                  style={styles.input}
                  onChangeText={setFasilitas}
                  value={fasilitas}
                  placeholder="Pilih Fasilitas"
                  selectTextOnFocus={false}
                />
                </View>
    
                <Text style={styles.header2}>Tanggal Pesanan </Text>
                <View style={styles.maininputan}>
                <img src={Datee} alt ="Date" width="19" height="19"/>
                  <Input
                    style={styles.input}
                    onChangeText={setTanggal}
                    value={tanggal}
                    placeholder="Pilih Tanggal Masuk"
                    selectTextOnFocus={false}
                  />
                </View>

                <Text style={styles.header2}>Waktu Pesan</Text>
                <View style={styles.maininputan}>
                <img src={Clock} alt ="Clock" width="19" height="19"/>
                  <Input
                    style={styles.input}
                    onChangeText={setWaktu}
                    value={waktu}
                    placeholder="Pilih Waktu Pesan"
                    selectTextOnFocus={false}
                  />
                </View>
                <View style={styles.maininputan}>
                <Text style={styles.text}>Dewasa</Text>
                <Text style={styles.text}>1 Orang</Text>

                </View>
                
                

              <Button
                color= '#ED7D31'
                title="Pesan Tiket"
                onPress={onsubmit}
              />
            </View>
     
    
        </View>
      
        </KeyboardAvoidingView>
      </SafeAreaView>
      </ScrollView>
    
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB',
    overflow : "hidden",
    alignItems : 'center',
  },
  keyboard: {
    backgroundColor: '#88b454',
  },
  top: {
    flexDirection:'row',
    alignItems: 'center',
    padding:40,
    justifyContent: 'space-between',
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
    color: '#000079',
    fontSize: 30,
    // fontFamily: 'Sans-Serif',
    fontWeight : 'Bold',
  },
  header2: {
    fontWeight:'bold',
    // fontFamily: 'Sans-Serif',
    color: 'Black',
  },
  card: {
    backgroundColor: 'white',
    margin: 'auto',
    width: '79%',
    padding:20,
    borderRadius:10,
    boxShadow: '0px 4px 8px 0px rgba(0,0,0,0.2)',
  },
  input: {
    height: 40,
    width: '100%',
    border:'none',
    padding: 10,
    borderRadius:3,
    
  },
  
  text:{
    width: '100%',
    flexDirection:'row',
    alignItems: 'center',
    marginBottom:10,
    marginTop:5,
    paddingLeft:10,
    fontWeight:'bold',
    fontSize: 13,
  }
});

export default Home;