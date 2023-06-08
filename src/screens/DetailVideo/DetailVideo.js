import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ms } from 'react-native-size-matters';
import YoutubePlayer from 'react-native-youtube-iframe';


export default function DetailVideo({ route }) {
  const Navigation = useNavigation();
  const { title, videoId } = route.params;

  return (
    <View>
      <StatusBar
        hidden={true}
      />

      <YoutubePlayer
        height={300}
        videoId={videoId}
      />
      <View style={styles.container}>
        <Text style={styles.title}>
          {title}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: ms(20),
    color: '#000',
    marginTop: ms(-40),
    marginBottom: ms(40)
  },
  container: {
    paddingHorizontal: ms(14),
    // marginTop: ms(300)
  }
})