import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import { ms } from 'react-native-size-matters'


// ilustrasi 
import Ilustrasi_intro from '../../assets/ilustrasi/nelayan.png'

export default function BukaTambak() {
  const sendMessage = () => {
    let url =
      'whatsapp://send?text=Halo saya ingin buka usaha tambak melalui aplikasi Wondsea\n\n' + '&phone=62' + 87829025932;

    Linking.openURL(url)
      .then((data) => {
        console.log('WhatsApp Opened');
      })
      .catch(() => {
        alert('Make sure Whatsapp installed on your device');
      });
  }
  return (
    <View style={styles.container}>
      <Image source={Ilustrasi_intro} style={styles.ilustrasi} />

      <View style={styles.wrapper}>
        <View>
          <Text style={styles.myTambak}>
            MyTambak
          </Text>
          <Text style={styles.deskripsi}>
            Siap membantu Anda membuka usaha tambak!
          </Text>
        </View>

        <TouchableOpacity onPress={sendMessage}>
          <View style={styles.start}>
            <Text style={styles.textHubungi}>
              Hubungi Sekarang!
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around'
  },
  ilustrasi: {
    marginTop: ms(34),
    width: '100%',
    height: '50%'
  },
  deskripsi: {
    fontSize: ms(18),
    color: "black"
  },

  myTambak: {
    fontSize: ms(24),
    fontWeight: '700',
    color: 'black'
  },

  wrapper: {
    paddingHorizontal: ms(20),
    flex: 1,
    justifyContent: 'space-around'
  },

  start: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#19A7CE',
    paddingVertical: ms(14),
    borderRadius: ms(12)
  },

  textHubungi: {
    color: '#fff',
    fontSize: ms(20),
    fontWeight: '700'
  }
})