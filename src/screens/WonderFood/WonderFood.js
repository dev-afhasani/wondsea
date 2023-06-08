import { StyleSheet, Text, View, Linking, ActivityIndicator, RefreshControl, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ms } from 'react-native-size-matters'
import Navbar from '../../components/Navbar/Navbar'

//Component
import Promo from '../../components/Promo/promo'
import Title from '../../components/Title/title'
import Product from '../../components/Product/Product'

import axios from 'axios'

export default function WonderFood() {
  const [products, setProducts] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    getProducts();
  }, [])

  const getProducts = async () => {
    const response = await axios.get('https://azhamrasyid.com/wondsea/api/wonderfood');
    setProducts(response.data.data)
    setIsLoaded(true)
  }

  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getProducts().then(() => setRefreshing(false));
  }, [])

  const sendMessage = (nomor) => {
    let url =
      'whatsapp://send?text=Halo, saya mau pesan produk ini' + '&phone=62' + nomor;

    Linking.openURL(url)
      .then((data) => {
        console.log('WhatsApp Opened');
      })
      .catch(() => {
        alert('Make sure Whatsapp installed on your device');
      });
  }

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
      <Navbar text={'WonderFood'} />
      {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginTop: ms(15) }}>
          <Promo source={Promo1} />
          <Promo source={Promo2} />
        </ScrollView> */}
      <View style={styles.promoTitle}>
        <Title name={"Hasil olahan perikanan siap santap"} subtitle={"Dapetin makanan sehat segar langsung dari perikanan berkualitas"} />
      </View>
      <View style={styles.contentWrapper}>
        <View style={styles.productContainer}>
          {
            isLoaded ? (
              products.map((product) => (
                <View key={product.id}>
                  <Product
                    source={{ uri: `${product.image}` }}
                    name={product.title}
                    price={product.price}
                    mitra={product.mitra}
                    onPress={() => sendMessage(product.contact)} />

                </View>
              ))
            ) : (
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <ActivityIndicator size={'large'} color={"#19A7CE"} />
              </View>
            )
          }

        </View>

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  }
  ,
  promoTitle: {
    paddingHorizontal: ms(14),
    marginTop: ms(24),
    marginBottom: ms(-10)
  },

  contentWrapper: {
    // paddingHorizontal: ms(5),
    paddingBottom: ms(30)
  },

  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap'
  }


})