import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { ms } from 'react-native-size-matters'

export default function Menu({ source, title, onPress }) {
  return (
    <View>
      <View style={styles.iconsWrapper}>
        <TouchableOpacity activeOpacity={0.4} onPress={onPress} style={styles.iconContainer}>
          <Image source={source} style={styles.icon} />
          <Text style={{ marginTop: ms(14), color: 'black' }}>
            {title}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: ms(24)
  },
  iconContainer: {
    // backgroundColor: '#19A7CE',
    width: ms(80),
    height: ms(70),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: ms(14)
  },

  icon: {
    height: ms(40),
    width: ms(40)
  },

  iconsWrapper: {
    alignItems: 'center'
  }
})