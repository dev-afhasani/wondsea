import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MitraBox from '../../components/MitraBox/MitraBox'
import Il_mitra1 from '../../assets/ilustrasi/mitra-pempek-ciko.png'
import Il_mitra2 from '../../assets/ilustrasi/mitra-tung-dimsum.png'
import Il_mitra3 from '../../assets/ilustrasi/mitra-gemilang-bahari.png'
import { ms } from 'react-native-size-matters'

export default function Mitra() {
  return (
    <View style={styles.container}>
      <ScrollView>

        <View style={styles.mitraTitle}>
          <Text style={{ fontSize: ms(25), color: '#fff' }}>
            Mitra Kami
          </Text>
        </View>
        <View style={styles.mitraContainer}>
          <MitraBox source={Il_mitra3} />
        </View>
        <View style={styles.mitraContainer}>
          <MitraBox source={Il_mitra1} />
          <MitraBox source={Il_mitra2} />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({

  mitraTitle: {
    paddingHorizontal: ms(12),
    marginBottom: ms(20),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#19A7CE',
    height: ms(80),
    borderBottomRightRadius: ms(10),
    borderBottomLeftRadius: ms(10)


  },
  mitraContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap'

  }
})