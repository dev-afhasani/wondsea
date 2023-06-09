import { StyleSheet, Text, View, Image, StatusBar, ScrollView, RefreshControl, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ms } from 'react-native-size-matters';
import axios from 'axios'

//Component
import Menu from '../../components/Menu/menu';
import Title from '../../components/Title/title';
import Promo from '../../components/Promo/promo';

//Icons
import Icon_Youtube from '../../assets/icons/youtube.png'
import Icon_Fishes from '../../assets/icons/fishes.png'
import Icon_Shrimp from '../../assets/icons/shrimp.png'
import ListVideo from '../../components/ListVideo/ListVideo';

//Ilustrai
import Ilustrasi_Beach from '../../assets/ilustrasi/beach.jpg'
import Ilustrasi_Promo1 from '../../assets/ilustrasi/bannerWonderEdu.png'
import Ilustrasi_Promo2 from '../../assets/ilustrasi/bannerMyTambak.png'
import Ilustrasi_Promo3 from '../../assets/ilustrasi/bannerWonderFood.png'


export default function Home() {
  const Navigation = useNavigation();
  const [courses, setCourses] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    const response = await axios.get("https://azhamrasyid.com/wondsea/api/wonderedu")
    setCourses(response.data.data)
    setIsLoaded(true)
  }

  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getProducts().then(() => setRefreshing(false));
  }, [])


  return (
    <View style={styles.container} >
      <StatusBar
        backgroundColor={'#19A7CE'}
      />
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            progressBackgroundColor={'#FFF'}
          />}
        showsVerticalScrollIndicator={false}
      >

        <View style={styles.containerText}>
          <Text style={styles.welcome}>
            Selamat Datang
          </Text>
          <Text style={styles.name}>
            Semoga harimu indah!
          </Text>
        </View>
        <View style={styles.header} >
          <Image source={Ilustrasi_Beach} style={styles.headerImage} />
        </View>

        <View style={styles.containerMenu}>
          <Menu source={Icon_Shrimp} title={"My Tambak"} onPress={() => Navigation.navigate('MyTambak')} />
          <Menu source={Icon_Youtube} title={"Wonder Edu"} onPress={() => Navigation.navigate('WonderEdu')} />
          <Menu source={Icon_Fishes} title={"Wonder Food"} onPress={() => Navigation.navigate('WonderFood')} />
        </View>

        <View style={styles.promoContainer}>
          <Title name={"Mau usaha tambak? Mau belanja produk laut? 🤗 "} subtitle={"Dapetin semuanya di Wondsea!"}></Title>
        </View>

        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ paddingLeft: ms(8) }}>
            <Promo source={Ilustrasi_Promo1} onPress={() => Navigation.navigate('WonderEdu')} />
            <Promo source={Ilustrasi_Promo2} onPress={() => Navigation.navigate('MyTambak')} />
            <Promo source={Ilustrasi_Promo3} onPress={() => Navigation.navigate('WonderFood')} />
          </ScrollView>
        </View>

        <View style={styles.mycourseContainer}>
          <Title name={"Belajar makin mudah 😉"} subtitle={"Dapetin ilmu perikanan dan kelautan sekarang juga!"} />
          {
            isLoaded ? (
              courses.map((course) => (
                <View key={course.id}>
                  <ListVideo
                    key={course.id}
                    title={course.title}
                    source={{ uri: `${course.image}` }}
                    onPress={() => Navigation.navigate('DetailVideo', {
                      title: `${course.title}`,
                      videoId: `${course.link}`
                    })}
                  />
                </View>
              ))
            ) : (
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <ActivityIndicator size={'large'} color={"#19A7CE"} />
              </View>
            )
          }
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({

  welcome: {
    color: '#fff',
    paddingHorizontal: ms(14),
    paddingTop: ms(20)
  },

  containerText: {
    backgroundColor: '#19A7CE',
    paddingBottom: ms(60)
  },

  name: {
    color: '#fff',
    paddingHorizontal: ms(14),
    marginTop: ms(4),
    marginBottom: ms(8),
    fontSize: ms(20)
  },

  header: {
    paddingHorizontal: ms(14),
    height: ms(100),
    borderRadius: ms(16),
    marginBottom: ms(25),
    marginTop: ms(-50)
  },

  headerImage: {
    paddingHorizontal: ms(14),
    height: ms(100),
    width: '100%',
    resizeMode: 'cover',
    borderRadius: ms(10)
  },

  containerMenu: {
    paddingHorizontal: ms(15),
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: ms(12)
  },

  promoContainer: {
    paddingHorizontal: ms(14),
    marginTop: ms(24),
    marginBottom: ms(-12)
  },

  mycourseContainer: {
    paddingHorizontal: ms(14),
    marginTop: ms(30)
  }
})