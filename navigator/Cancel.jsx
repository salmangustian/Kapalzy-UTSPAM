import {React} from 'react';
import {ScrollView, Text, StyleSheet, View, StatusBar} from 'react-native';
import Tiket from '../assets/icon.png'

const Cancel = ({ navigation }) => {

    return ( 

    <ScrollView>
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.head}>
                        <Text style={styles.Cardtitle}>Kapalzy</Text>
                </View>

                <Text style={styles.subJudul}>Tidak Ada Pembatalan Tiket</Text>
                <img src={Tiket} alt ="Panah" width="300" height="800"/>

            </View>
 
            </View>
    
    </ScrollView>
   
    )
}
  
  export default Cancel;
