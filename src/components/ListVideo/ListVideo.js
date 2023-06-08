import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { ms } from 'react-native-size-matters'

import Btn_Play from '../../assets/icons/btn_play.png'

export default function ListVideo({ source, title, onPress }) {
  return (
    <View>
      <TouchableOpacity style={styles.contentWrapper} onPress={onPress}>
        <View style={styles.boxVideo}>
          <Image source={source} style={styles.thumbnail} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={styles.boxDesc}>
            <Text style={styles.text}>{title}</Text>
          </View>
          <View style={styles.boxView}>
            <Image source={Btn_Play} style={styles.icPlay} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  boxVideo: {
    backgroundColor: "#E1E1E1",
    width: ms(78),
    height: ms(78),
    borderRadius: ms(12)
  },
  contentWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: ms(0.6),
    borderColor: '#A1a1a1',
    paddingBottom: ms(12),
    borderRadius: ms(7),
    marginBottom: ms(20),
  },
  thumbnail: {
    height: '100%',
    width: '100%',
    resizeMode: 'center',
    aspectRatio: 1,
  },
  boxDesc: {
    // paddingVertical: ms(16),
    // alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: ms(14),
    paddingRight: ms(24),
    width: ms(225)
  },
  text: {
    fontSize: ms(14),
    // Width: ms(180),
    fontWeight: '700',
    color: '#000',
  },
  tonton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: ms(12)
  },

  boxView: {
    justifyContent: 'center',

  },

  icPlay: {
    width: ms(40),
    height: ms(40),
    // marginLeft: ms(10)
  }
})