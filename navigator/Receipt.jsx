import {React} from 'react';
import {ScrollView, Text, StyleSheet, View, Button, StatusBar, Image} from 'react-native';
import Arrow from '../assets/navigate-icon.png'

const Receipt = ({ navigation, route }) => {
    const {keberangkatan, tujuan, fasilitas, tanggal, waktu} = route.params;
    const onsubmit = () => {
        // console.warn(awal, tujuan, fasilitas, tanggal, waktu);
        navigation.navigate('Order', {
          keberangkatan: keberangkatan,
          tujuan: tujuan,
          fasilitas: fasilitas,
          tanggal: tanggal,
          waktu: waktu,
        });
        this;
      };
    return (
    <ScrollView>
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.head}>
                        <Text style={styles.Cardtitle}>Layanan Kapalzy</Text>
                </View>

                <Text style={styles.subJudul}>Kursi Tersedia</Text>
                <Text style={styles.subJudul}>Detail Pemesanan Tiket </Text>

                <View style={styles.SubCard}>
                    <View style={styles.Wrap}>
                        <View style= {styles.cardinModal}>
                            <Text style={styles.dermaga}>{keberangkatan}</Text>
                        </View>

                        <View style= {styles.cardinModal}>
                        <img src={Arrow} alt ="Panah" width="20" height="20"/>
                        </View>

                        <View style= {styles.cardinModal}>
                            <Text style={styles.dermaga}>{tujuan}</Text>
                        </View>
                    </View>
                    
                    <Text style={styles.subJudul}>Detail Pemesanan </Text>
                    <Text >{tanggal} </Text>
                    <Text >{waktu} </Text>
                    <Text style={styles.subJudul}>Fasilitas</Text> 
                    <Text >{fasilitas} </Text>
                    <View style={styles.line}/>
                    <View style={styles.formInput}>
                        <Text style={styles.TextOnly}>Dewasa</Text>
                        <Text style={styles.TextOnly}>Rp 65.000,00</Text>
                    </View>   
                </View>

                <View style={styles.formText2}>
                        <Text style={styles.TextOnly2}>Total</Text>
                        <Text style={styles.TextOnly2}>Rp 65.000,00</Text>
                </View>

                <View style={styles.tombol}>
                        <Button 
                            color='#000080'
                            title="Kembali" 
                            onPress={() => navigation.navigate('Home')}
                        />
                        <Button 
                            color='#ED7D31' 
                            title="Proses" 
                            onPress={onsubmit}
                        />
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
        marginTop: 10,
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
  });
  
  export default Receipt;
