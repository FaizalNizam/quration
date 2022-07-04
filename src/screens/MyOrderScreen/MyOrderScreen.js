import {View, Text, FlatList, StatusBar} from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import {colors} from '../../constants/colors'
import {back} from '../../assets/images'
import {HEIGHT, WIDTH} from '../../constants/Dimensions'
import {OrderedItems} from '../../components'
import {dataMyorders} from '../../constants/dataMyOrders'

const MyOrderScreen = () => {
  return (
    <Header
      title={'My Orders'}
      backgroundColor={colors.white}
      back={back}
      height={HEIGHT * 0.07}
      color={colors.black}>
      <StatusBar barStyle={'dark-content'} backgroundColor={colors.white} />
      <View
        style={{
          flex: 1,
          borderTopWidth: 1,
          borderTopColor: colors.lightGrey,
        }}>
        <FlatList
          data={dataMyorders}
          renderItem={({item}) => (
            <OrderedItems
              item={item}
              title1={'Order no :'}
              title2={'Delivery to '}
              title3={'Total Items '}
              title4={'Order date '}
            />
          )}
          numColumns={1}
          style={{marginHorizontal: WIDTH * 0.05}}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Header>
  )
}

export default MyOrderScreen
