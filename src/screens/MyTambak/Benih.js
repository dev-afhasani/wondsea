import { ScrollView, StyleSheet, Text, View, Linking, RefreshControl, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ms } from 'react-native-size-matters'
import axios from 'axios'

//Component
import Navbar from '../../components/Navbar/Navbar'
import Promo from '../../components/Promo/promo'
import Title from '../../components/Title/title'
import Product from '../../components/Product/Product'

//Ilustrasi
import Benur from '../../assets/ilustrasi/benur.jpg'
import Ilustrasi_Tambak from '../../assets/ilustrasi/tambakGemilangBahari.png'


export default function Benih() {

  const [products, setProducts] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    getProducts();

  }, [])

  const getProducts = async () => {
    const response = await axios.get('https://azhamrasyid.com/wondsea/api/wonderseed');
    setProducts(response.data.data)
    setIsLoaded(true)
  }

  const sendMessage = (nomor) => {
    let url =
      'whatsapp://send?text=Pemesanan ini dilakukan melalui aplikasi Wondsea\n\nHalo, Saya mau pesan produk ini.\nNama produk:' + '&phone=62' + nomor;

    Linking.openURL(url)
      .then((data) => {
        console.log('WhatsApp Opened');
      })
      .catch(() => {
        alert('Make sure Whatsapp installed on your device');
      });
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
        />
      }
      showsVerticalScrollIndicator={false}>
      <Navbar text={'Benih'} />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginTop: ms(15), marginLeft: ms(10) }}>
        <Promo source={Benur} />
        <Promo source={Ilustrasi_Tambak} />
      </ScrollView>
      <View style={styles.promoTitle}>
        <Title name={"Menjual benih berkualitas"} subtitle={"Dapetin benih sehat langsung dari sumbernya"} />
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
  promoTitle: {
    paddingHorizontal: ms(14),
    marginTop: ms(24),
    marginBottom: ms(-10)
  },

  contentWrapper: {
    // paddingHorizontal: ms(10),
    paddingBottom: ms(30)
  },

  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap'
  }
})