import {View, Text, Pressable, Image, FlatList, StatusBar} from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import {colors} from '../../constants/colors'
import {back, couponIcon, forwardIcon, qatarIcon} from '../../assets/images'
import {HEIGHT, WIDTH} from '../../constants/Dimensions'
import {dummy} from '../../assets/images'
import {CommonButton} from '../../components'

const CheckOutScreen = () => {
  console.log('height', HEIGHT * 0.155)
  console.log('width', WIDTH * 0.462)

  const data = [
    {
      id: 1,
      title: 'PROMO CODE',
    },
    {
      id: 2,
      title: 'DELIVERY ADDRESS',
    },
    {
      id: 3,
      title: 'BILLING ADDRESS',
    },
    {
      id: 4,
      title: 'DELIVERY  METHOD',
    },
    {
      id: 5,
      title: 'PAYMENT METHOD',
    },
  ]

  const RenderButton = ({item}) => (
    <View
      style={{
        height: HEIGHT * 0.081,
        borderBottomWidth: 1,
        borderBottomColor: colors.lightGrey,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <StatusBar barStyle={'dark-content'} />
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: colors.lightBlack,
          width: WIDTH * 0.462,
        }}>
        {item.title}
      </Text>
      {item.title === 'PROMO CODE' && (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={couponIcon} />
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: colors.shadeBlack,
              marginLeft: WIDTH * 0.01,
            }}>
            Code Applied
          </Text>
        </View>
      )}
      <Image source={forwardIcon} />
    </View>
  )

  return (
    <Header
      title={'Checkout'}
      backgroundColor={colors.white}
      back={back}
      cancel={'Cancel'}
      height={HEIGHT * 0.07}
      color={colors.black}
      borderBottomWidth={1}>
      <View
        style={{
          height: HEIGHT * 0.081,
          marginHorizontal: WIDTH * 0.05,
          borderBottomWidth: 1,
          borderBottomColor: colors.lightGrey,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: colors.lightBlack,
          }}>
          DELIVER TO
        </Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: WIDTH * 0.25,
          }}>
          <Image source={qatarIcon} />
          <Text
            style={{
              fontSize: 16,
              color: colors.shadeBlack,
              marginRight: WIDTH * 0.042,
              marginLeft: WIDTH * 0.022,
              fontWeight: 'bold',
            }}>
            Qatar
          </Text>
          <Image source={forwardIcon} />
        </View>
      </View>

      <View
        style={{
          height: HEIGHT * 0.25,
          marginHorizontal: WIDTH * 0.05,
          borderBottomWidth: 1,
          borderBottomColor: colors.lightGrey,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: HEIGHT * 0.022,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: colors.lightBlack,
            }}>
            MY BAG
          </Text>
          <Text style={{fontSize: 12, color: colors.black}}>View bag</Text>
        </View>

        <Pressable style={{marginTop: HEIGHT * 0.021}}>
          <Image
            source={dummy}
            style={{
              height: HEIGHT * 0.155,
              width: WIDTH * 0.257,
              resizeMode: 'cover',
            }}
          />
        </Pressable>
      </View>

      <FlatList
        data={data}
        renderItem={({item}) => <RenderButton item={item} />}
        style={{marginHorizontal: WIDTH * 0.05}}
        showsVerticalScrollIndicator={false}
      />

      <View
        style={{
          height: HEIGHT * 0.15,
          backgroundColor: colors.softGrey,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 16,
            color: colors.black,
            alignSelf: 'center',
            marginBottom: HEIGHT * 0.017,
          }}>
          Grand total :{' '}
          <Text style={{fontSize: 18, fontWeight: 'bold', color: colors.black}}>
            158.9 QAR (4 items)
          </Text>
        </Text>
        <CommonButton
          title={'CHECKOUT'}
          height={HEIGHT * 0.057}
          backgroundColor={colors.black}
          color={colors.white}
          marginHorizontal={WIDTH * 0.05}
        />
      </View>
    </Header>
  )
}

export default CheckOutScreen
