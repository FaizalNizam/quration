import {FlatList,StatusBar} from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import Search from '../../components/Search'
import {WIDTH, HEIGHT} from '../../constants/Dimensions'
import {Product} from '../../components'
import {
  dollarIcon,
  back,
  cartIcon,
  dummy,
  wishlistIcon,
} from '../../assets/images'
import {colors} from '../../constants/colors'

const data = [
  {
    id: 1,
    design: 'salma khalid',
    product: 'Lined slippers',
    price: '255 QAR',
    image: dummy,
  },
  {
    id: 2,
    design: 'salma khalid',
    product: 'Lined slippers',
    price: '255 QAR',
    image: dummy,
  },
  {
    id: 3,
    design: 'salma khalid',
    product: 'Lined slippers',
    price: '255 QAR',
    image: dummy,
  },
  {
    id: 4,
    design: 'salma khalid',
    product: 'Lined slippers',
    price: '255 QAR',
    image: dummy,
  },
  {
    id: 5,
    design: 'salma khalid',
    product: 'Lined slippers',
    price: '255 QAR',
    image: dummy,
  },
  {
    id: 6,
    design: 'salma khalid',
    product: 'Lined slippers',
    price: '255 QAR',
    image: dummy,
  },
]

const FeaturedScreen = ({navigation}) => {
  const render = ({item}) => (
    <Product item={item} navigation={navigation} icon={wishlistIcon} />
  )

  const filterNavigation = () => navigation.navigate('FilterScreen')

  return (
    <Header
      title={'Featured Products'}
      back={back}
      dollarIcon={dollarIcon}
      cartIcon={cartIcon}
      color={colors.black}
      iconColor={colors.lightGrey}
      backgroundColor={colors.white}>
      <StatusBar barStyle="dark-content" />

      <Search filterNavigation={filterNavigation} />

      <FlatList
        data={data}
        renderItem={render}
        style={{marginTop: HEIGHT * 0.0356, marginHorizontal: WIDTH * 0.05}}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </Header>
  )
}

export default FeaturedScreen
