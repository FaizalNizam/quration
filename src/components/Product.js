import {View, Text, Image, ImageBackground, Pressable} from 'react-native'
import React from 'react'
import {HEIGHT, WIDTH} from '../constants/Dimensions'
import {colors} from '../constants/colors'
import {favblackIcon, wishlistIcon} from '../assets/images'

const Product = ({navigation, item, icon}) => {
  return (
    <Pressable
      //onPress={navigation.replace('DesignerSelectScreen')}
      style={{
        height: HEIGHT * 0.342,
        width: WIDTH * 0.43,
        marginBottom: HEIGHT * 0.0297,
        marginRight: WIDTH * 0.052,
      }}>
      <ImageBackground
        source={item.image}
        style={{width: WIDTH * 0.42, height: HEIGHT * 0.255}}>
        <Pressable>
          <Image
            source={icon}
            style={{
              alignSelf: 'flex-end',
              right: WIDTH * 0.026,
              top: HEIGHT * 0.012,
            }}
          />
        </Pressable>
      </ImageBackground>

      <Text
        style={{
          color: colors.lightBlack,
          fontSize: 12,
          marginTop: HEIGHT * 0.012,
        }}>
        Designed by {''}
        <Text style={{color: colors.black, fontWeight: 'bold'}}>
          {item.design}
        </Text>
      </Text>

      <Text
        style={{color: colors.grey, fontSize: 16, marginTop: HEIGHT * 0.01}}>
        {item.product}
      </Text>

      <Text
        style={{color: colors.gold, fontSize: 16, marginTop: HEIGHT * 0.004}}>
        {item.price}
      </Text>
    </Pressable>
  )
}

export default Product
