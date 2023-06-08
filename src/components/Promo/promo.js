import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { ms } from 'react-native-size-matters'

export default function Promo({ source, onPress }) {
  return (
    <TouchableOpacity activeOpacity={0.4} onPress={onPress}  >
      <View style={styles.containerPromo}>
        <Image source={source} style={styles.promo} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  containerPromo: {
    height: ms(140),
    width: ms(280),
    marginHorizontal: ms(4)
  }
  ,
  promo: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    borderRadius: ms(12)
  }
})