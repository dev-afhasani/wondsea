import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ms } from 'react-native-size-matters'

export default function Product({ source, price, name, onPress, mitra }) {
  return (
    <View style={styles.productContainer}>
      <View style={styles.imageWrapper}>
        <Image source={source} style={styles.imageProduct} />
      </View>

      <View style={styles.textContainer}>
        <View>
          <Text style={styles.mitraProduct}>
            {mitra}
          </Text>
        </View>
        <View>
          <Text style={styles.nameProduct}>
            {name}
          </Text>
          <Text style={styles.priceProduct}>
            Rp {price}
          </Text>
        </View>
        <TouchableOpacity activeOpacity={0.5} onPress={onPress} style={styles.button}>
          <Text style={styles.buttonText}>
            Pesan Sekarang
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  productContainer: {
    alignItems: 'center',
    width: ms(170),
    marginTop: ms(10),
    borderWidth: ms(0.3),
    paddingBottom: ms(16),
    borderRadius: ms(10),
    borderColor: '#7F8487',
    backgroundColor: '#FFF'
  },

  imageWrapper: {
    // width: ms(150)
    marginBottom: ms(10)
  },

  imageProduct: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'cover',
    borderTopLeftRadius: ms(10),
    borderTopRightRadius: ms(10)
  },

  textContainer: {
    paddingHorizontal: ms(12)
  },

  nameProduct: {
    fontSize: ms(15),
    color: '#000',
    marginBottom: ms(12)
  },

  priceProduct: {
    fontSize: ms(16),
    color: '#19A7CE',
    fontWeight: '700',
  },

  button: {
    marginTop: ms(12),
    backgroundColor: '#19A7CE',
    paddingHorizontal: ms(30),
    paddingVertical: ms(10),
    borderRadius: ms(6),
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: '600',
    justifyContent: 'center',
    textAlign: 'center'
  },

  mitraProduct: {
    color: '#E43535',
    fontSize: ms(10),
    marginBottom: ms(5)
  }


})