import {FlatList, StatusBar} from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import {colors} from '../../constants/colors'
import {cartIcon, dummy} from '../../assets/images'
import {Product} from '../../components'
import {WIDTH, HEIGHT} from '../../constants/Dimensions'

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

const WishlistScreen = () => {
  const WishlistButon = ({item}) => <Product item={item} />

  return (
    <Header
      title={'Wishlist'}
      backgroundColor={colors.white}
      cartIcon={cartIcon}
      color={colors.black}
      iconColor={colors.lightGrey}>
      <StatusBar barStyle="dark-content" />
      <FlatList
        data={data}
        renderItem={({item}) => <WishlistButon item={item} />}
        numColumns={2}
        style={{marginHorizontal: WIDTH * 0.05, marginTop: HEIGHT * 0.0237}}
        showsVerticalScrollIndicator={false}
      />
    </Header>
  )
}

export default WishlistScreen
