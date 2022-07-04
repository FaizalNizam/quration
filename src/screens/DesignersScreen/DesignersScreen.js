import {View, Text, Image, Pressable, FlatList, StatusBar} from 'react-native'
import React from 'react'
import {colors} from '../../constants/colors'
import {HEIGHT, WIDTH} from '../../constants/Dimensions'
import Header from '../../components/Header'
import {
  backWhite,
  cartWhiteIcon,
  dollarWhiteIcon,
  dummy,
} from '../../assets/images'
import {dp} from '../../assets/images'
import {Product} from '../../components'

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

const DesignersScreen = ({route}) => {
  console.log('height', HEIGHT * 0.02)
  console.log('width', WIDTH * 0.033)

  const render = ({item}) => <Product item={item} />

  return (
    <Header
      title={'Designers'}
      back={backWhite}
      cartIcon={cartWhiteIcon}
      color={colors.white}
      iconColor={colors.darkGrey}
      height={HEIGHT * 0.13}
      backgroundColor={colors.black}
      marginTop={HEIGHT * 0.02}
      horrizontel={WIDTH * 0.052}
      screenName={route.name}>
      <StatusBar backgroundColor={colors.black} barStyle="light-content" />

      <Image
        source={dp}
        style={{
          position: 'absolute',
          marginTop: HEIGHT * -0.052,
          alignSelf: 'center',
          height: HEIGHT * 0.12,
          width: HEIGHT * 0.12,
        }}
      />

      <View
        style={{
          alignItems: 'center',
          marginHorizontal: WIDTH * 0.05,
          marginTop: HEIGHT * 0.072,
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: colors.black}}>
          Ranya alzahury
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: colors.lightBlack,
            marginTop: HEIGHT * 0.006,
          }}>
          576 items
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: colors.lightBlack,
            marginTop: HEIGHT * 0.012,
            lineHeight: HEIGHT * 0.024,
          }}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam…
        </Text>
        <Pressable>
          <Text
            style={{
              fontSize: 16,
              color: colors.black,
              marginTop: HEIGHT * 0.006,
              textDecorationLine: 'underline',
            }}>
            READ MORE
          </Text>
        </Pressable>
      </View>

      <FlatList
        data={data}
        renderItem={render}
        style={{
          marginTop: HEIGHT * 0.012,
          marginHorizontal: WIDTH * 0.052,
        }}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </Header>
  )
}

export default DesignersScreen
