import {View, Text, Image} from 'react-native'
import React from 'react'
import {HEIGHT, WIDTH} from '../constants/Dimensions'
import {colors} from '../constants/colors'
import DropDownButton from './DropDownButton'

const OrderedItems = ({item, title1, title2, title3, title4, id}) => {
  return (
    <View
      style={{
        height: HEIGHT * 0.23,
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderBottomColor: colors.borderGrey,
        alignItems: 'center',
      }}>
      <Image
        source={item.image}
        style={{
          width: WIDTH * 0.3,
          height: HEIGHT * 0.175,
          resizeMode: 'contain',
        }}
      />

      <View
        style={{
          marginLeft: WIDTH * 0.04,
          height: HEIGHT * 0.175,
        }}>
        <Text style={{color: colors.black, fontSize: 17}}>
          {title1}
          {item.item1}
        </Text>
        <Text
          style={{
            color: colors.lightBlack,
            fontSize: 15,
            marginTop: HEIGHT * 0.004,
          }}>
          {title2} {''}
          <Text style={{color: colors.lightBlue}}>{item.item2}</Text>
        </Text>
        <Text
          style={{
            color: colors.lightBlack,
            fontSize: 15,
            marginTop: HEIGHT * 0.01,
          }}>
          {title3}: {item.item3}
        </Text>

        <Text
          style={{
            color: colors.lightBlack,
            fontSize: 15,
            marginTop: HEIGHT * 0.005,
          }}>
          {title4}: {item.item4}
        </Text>

        {id === 'ShoppingBag' ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flex: 1,
              justifyContent: 'space-between',
              marginTop: HEIGHT * 0.022,
            }}>
            <DropDownButton />
            <Text
              style={{
                color: colors.gold,
                fontSize: 16,
              }}>
              {item.item5}
            </Text>
          </View>
        ) : (
          <Text
            style={{
              color: colors.gold,
              fontSize: 16,
              marginTop: HEIGHT * 0.01,
            }}>
            {item.item5}
          </Text>
        )}
      </View>
    </View>
  )
}

export default OrderedItems
