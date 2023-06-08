import { ScrollView, StyleSheet, Text, View, Dimensions, RefreshControl, ActivityIndicator } from 'react-native'
import React from 'react'
import { ms } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import _ from 'lodash'
import Image360Viewer from '@hauvo/react-native-360-image-viewer'

import Navbar from '../../components/Navbar/Navbar'
import Promo from '../../components/Promo/promo'
import Title from '../../components/Title/title';
import Menu from '../../components/Menu/menu';

import Ilustrasi_Tambak2 from '../../assets/ilustrasi/benur.jpg'
import Ilustrasi_Tambak from '../../assets/ilustrasi/tambakGemilangBahari.png'

import Icon_Buka_Tambak from '../../assets/icons/bukaTambak.png'
import Icon_Benih from '../../assets/icons/benih.png'
import Icon_Perkap_Tambak from '../../assets/icons/perkapTambak.png'

export default function MyTambak() {
  const Navigation = useNavigation();

  const { width, height } = Dimensions.get('window')
  const images = _.reverse([
    require(`../../assets/ilustrasi/view/1.jpg`),
    require(`../../assets/ilustrasi/view/2.jpg`),
    require(`../../assets/ilustrasi/view/3.jpg`),
    require(`../../assets/ilustrasi/view/4.jpg`),
    require(`../../assets/ilustrasi/view/5.jpg`),
    require(`../../assets/ilustrasi/view/6.jpg`),
    require(`../../assets/ilustrasi/view/7.jpg`),
    require(`../../assets/ilustrasi/view/8.jpg`),
    require(`../../assets/ilustrasi/view/9.jpg`),
    require(`../../assets/ilustrasi/view/10.jpg`),
    require(`../../assets/ilustrasi/view/11.jpg`),
    require(`../../assets/ilustrasi/view/12.jpg`),
    require(`../../assets/ilustrasi/view/13.jpg`),
    require(`../../assets/ilustrasi/view/14.jpg`),
    require(`../../assets/ilustrasi/view/15.jpg`),
    require(`../../assets/ilustrasi/view/16.jpg`),
    require(`../../assets/ilustrasi/view/17.jpg`),
    require(`../../assets/ilustrasi/view/18.jpg`),
    require(`../../assets/ilustrasi/view/19.jpg`),
    require(`../../assets/ilustrasi/view/20.jpg`),
    require(`../../assets/ilustrasi/view/21.jpg`),
  ])

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  return (
    <View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        <View style={styles.myTambakTitle}>
          <Text style={{ fontSize: ms(25), color: '#fff' }}>
            My Tambak
          </Text>
        </View>
        <View style={styles.welcomeText}>
          <Title name={'MyTambak hadir untuk penuhi kebutuhan tambakmu!'} subtitle={'Mulai usaha tambakmu sekarang!'} />
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginBottom: ms(24), paddingLeft: ms(10) }}>
          <Promo source={Ilustrasi_Tambak} />
          <Promo source={Ilustrasi_Tambak2} />
        </ScrollView>
        <View style={styles.containerMenu}>
          <Menu title={'Buka Tambak'} source={Icon_Buka_Tambak} onPress={() => Navigation.navigate('BukaTambak')} />
          <Menu title={'Benih'} source={Icon_Benih} onPress={() => Navigation.navigate('Benih')} />
          <Menu title={'Perlengkapan'} source={Icon_Perkap_Tambak} onPress={() => Navigation.navigate('Perlengkapan')} />
        </View>
        <View style={styles.seconWelcomeText} >
          <Title name={'360 View Tambak'} subtitle={'Geser kanan-kiri untuk melihat tambak'} />
        </View>
        <View style={styles.cameraView}>
          <Image360Viewer srcset={images} width={370} height={200} />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  myTambakTitle: {
    paddingHorizontal: ms(12),
    marginBottom: ms(10),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#19A7CE',
    height: ms(80),
    borderBottomRightRadius: ms(10),
    borderBottomLeftRadius: ms(10)


  },

  welcomeText: {
    paddingHorizontal: ms(14),
    marginTop: ms(14),
    color: '#000'
  },

  seconWelcomeText: {
    paddingHorizontal: ms(14)
  },

  containerMenu: {
    paddingHorizontal: ms(14),
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: ms(24)
  },
  cameraView: {
    paddingHorizontal: ms(14),
    height: ms(200),
    alignItems: 'center'
  },

  cameraImage: {
    paddingHorizontal: ms(14),
    width: '100%',
    resizeMode: 'cover',
    borderRadius: ms(10)
  },

  mycourseContainer: {
    paddingHorizontal: ms(14),
    marginTop: ms(30)
  }
})