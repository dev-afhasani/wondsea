import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ms } from 'react-native-size-matters'

// import IconBack from '../../assets/icons/leftArrow.png'
import IconBack from '../../assets/icons/leftArrowWhite.png'

export default function Navbar({ text }) {
  const Navigation = useNavigation()
  return (
    <View style={styles.navbarBg}>
      <TouchableOpacity onPress={() => Navigation.goBack()}>
        <Image source={IconBack} style={styles.arrowBack} />
      </TouchableOpacity>
      <Text style={styles.text}>
        {text}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  navbarBg: {
    paddingHorizontal: ms(20),
    paddingVertical: ms(27),
    // marginBottom: ms(14),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#19A7CE',
    borderBottomEndRadius: ms(10),
    borderBottomStartRadius: ms(10),
  },
  arrowBack: {
    width: ms(27),
    height: ms(27)
  },
  text: {
    fontSize: ms(20),
    color: '#fff',
    maxWidth: ms(300),
    fontWeight: '700',
    marginLeft: ms(16)
  }
})