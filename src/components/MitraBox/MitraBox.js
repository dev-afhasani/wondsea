import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { ms } from 'react-native-size-matters'


export default function MitraBox({ source, namaMitra }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={source} style={styles.imageMitra} />
      </View>
      <View style={styles.textMitraWrapper}>
        <Text style={styles.textMitra}>{namaMitra}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: ms(135),
    height: ms(135),
    // borderColor: '#000',
    // borderWidth: ms(0.3),
    marginBottom: ms(15)
  },

  imageWrapper: {
    alignItems: 'center'
  },

  imageMitra: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  textMitraWrapper: {
    // backgroundColor: '#aaa',
    alignItems: 'center',
    marginTop: ms(15)
  },

  textMitra: {
    fontSize: ms(17),
    color: '#000',
  }
})