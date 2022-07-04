import {View, Text, FlatList, Image, StatusBar} from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import {back, threeDotIcon} from '../../assets/images'
import {colors} from '../../constants/colors'
import {HEIGHT, WIDTH} from '../../constants/Dimensions'
import {data} from '../../constants/data'
import {OrderedItems} from '../../components'

const OrderDetailsScreen = () => {
  return (
    <Header
      title={'Order Details'}
      backgroundColor={colors.white}
      back={back}
      borderBottomWidth={1}
      height={HEIGHT * 0.07}
      color={colors.black}
      cartIcon={threeDotIcon}>
      <StatusBar barStyle="dark-content" />
      <View style={{marginHorizontal: WIDTH * 0.05, marginTop: HEIGHT * 0.03}}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              color: colors.shadeBlack,
              fontSize: 16,
              width: WIDTH * 0.33,
            }}>
            Order Number
          </Text>
          <Text style={{width: WIDTH * 0.07}}>:</Text>
          <Text
            style={{
              color: colors.shadeBlack,
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            6162578
          </Text>
        </View>

        <View style={{flexDirection: 'row', marginTop: HEIGHT * 0.012}}>
          <Text
            style={{
              color: colors.shadeBlack,
              fontSize: 16,
              width: WIDTH * 0.33,
            }}>
            Order Date
          </Text>
          <Text style={{width: WIDTH * 0.07}}>:</Text>
          <Text
            style={{
              color: colors.shadeBlack,
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            03/9/2021 - 10:53 am
          </Text>
        </View>

        <View style={{flexDirection: 'row', marginTop: HEIGHT * 0.012}}>
          <Text
            style={{
              color: colors.shadeBlack,
              fontSize: 16,
              width: WIDTH * 0.33,
            }}>
            Order Status
          </Text>
          <Text style={{width: WIDTH * 0.07}}>:</Text>
          <Text
            style={{
              color: colors.green,
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            On The Way
          </Text>
        </View>
      </View>

      <View
        style={{
          height: HEIGHT * 0.06,
          backgroundColor: colors.lightGrey,
          marginTop: HEIGHT * 0.04,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: colors.lightBlack,
            fontSize: 17,
            fontWeight: 'bold',
            marginHorizontal: WIDTH * 0.05,
          }}>
          Delivery Address
        </Text>
      </View>

      <View
        style={{
          marginHorizontal: WIDTH * 0.05,
          justifyContent: 'space-between',
          height: HEIGHT * 0.09,
          marginTop: HEIGHT * 0.02,
        }}>
        <Text
          style={{fontSize: 16, color: colors.shadeBlack, fontWeight: 'bold'}}>
          Basel Zakarya
        </Text>
        <Text style={{fontSize: 16, color: colors.shadeBlack}}>
          +974 44621428
        </Text>
        <Text style={{fontSize: 16, color: colors.shadeBlack}}>
          Al Mirqab Al Jadeed St, Doha, Qatar
        </Text>
      </View>

      <View
        style={{
          height: HEIGHT * 0.06,
          backgroundColor: colors.lightGrey,
          marginTop: HEIGHT * 0.04,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: colors.lightBlack,
            fontSize: 17,
            fontWeight: 'bold',
            marginHorizontal: WIDTH * 0.05,
          }}>
          Items (5)
        </Text>
      </View>

      <FlatList
        data={data}
        renderItem={({item}) => (
          <OrderedItems
            item={item}
            title2={'Designed by'}
            title3={'Colour'}
            title4={'Size'}
          />
        )}
        numColumns={1}
        style={{marginHorizontal: WIDTH * 0.05}}
        showsVerticalScrollIndicator={false}
      />
    </Header>
  )
}

export default OrderDetailsScreen
