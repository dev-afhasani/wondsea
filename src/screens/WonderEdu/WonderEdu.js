import { StyleSheet, Text, View, ScrollView, Image, ActivityIndicator, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ms } from 'react-native-size-matters'

import Ilustrasi_Praktik from '../../assets/ilustrasi/praktik.png'
import Ilustrasi_Teori from '../../assets/ilustrasi/teori.png'

import ListVideo from '../../components/ListVideo/ListVideo'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'

export default function WonderEdu() {
  const Navigation = useNavigation()
  const [products, setProducts] = useState([])

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    getProducts();
  }, [])

  const getProducts = async () => {
    const response = await axios.get('https://azhamrasyid.com/wondsea/api/wonderedu');
    setProducts(response.data.data)
    setIsLoaded(true)
  }

  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getProducts().then(() => setRefreshing(false));
  }, [])

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressBackgroundColor={'#FFF'}
          tintColor={'#FFF'}
        />}
      showsVerticalScrollIndicator={false}
    >
      <Navbar text={"Wonder Edu"} />
      <View style={styles.categories}>
        <Image source={Ilustrasi_Praktik} style={styles.category} />
        <Image source={Ilustrasi_Teori} style={styles.category} />
      </View>
      <View style={styles.container}>
        {
          isLoaded ? (
            products.map((product) => (
              <View key={product.id}>
                <ListVideo
                  source={{ uri: `${product.image}` }}
                  title={product.title}
                  onPress={() => Navigation.navigate('DetailVideo', {
                    title: product.title,
                    videoId: product.link
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
  )
}

const styles = StyleSheet.create({
  categories: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: ms(15),
  },
  category: {
    height: ms(120),
    width: ms(164),
    resizeMode: 'contain',
    marginHorizontal: ms(5)
  },
  container: {
    paddingHorizontal: ms(20),
    marginTop: ms(24)
  },
})