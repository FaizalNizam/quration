import {
  View,
  Text,
  FlatList,
  ScrollView,
  Pressable,
  Image,
  Platform,
  StatusBar,
} from 'react-native'
import React, {useState} from 'react'
import Header from '../../components/Header'
import {colors} from '../../constants/colors'
import {back, tickIcon} from '../../assets/images'
import {HEIGHT, WIDTH} from '../../constants/Dimensions'
import {CommonButton, Form, RadioButton} from '../../components'

const AddressScreen = () => {
  console.log('Height', HEIGHT * 0.26)
  console.log('Width', WIDTH * 0.021)

  const [radioActive, setRadioActive] = useState('')

  const data = [
    {
      id: 1,
      name: 'Basel Zakarya',
      mobile: '+974 44621428',
      address: 'Al Mirqab Al Jadeed St,Doha, Qatar',
    },
    {
      id: 2,
      name: 'Amal Ashok',
      mobile: '+974 44621428',
      address: 'Al Mirqab Al Jadeed St,Doha, Qatar',
    },
    {
      id: 3,
      name: 'Add New Billing Address',
    },
  ]

  const SelectAddress = ({item}) => (
    <View
      style={{
        height: HEIGHT * 0.111,
        borderColor: colors.lightGrey,
        borderWidth: 1,
        marginTop: HEIGHT * 0.017,
        flexDirection: 'row',
      }}>
      <View
        style={{
          width: WIDTH * 0.14,
          borderRightWidth: 1,
          borderRightColor: colors.lightGrey,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <RadioButton
          radioActive={radioActive}
          setRadioActive={setRadioActive}
          id={item.id}
        />
      </View>

      <View
        style={{
          width: WIDTH * 0.642,
          marginTop: HEIGHT * 0.018,
          marginLeft: WIDTH * 0.04,
          marginBottom: HEIGHT * 0.018,
          justifyContent: 'space-between',
        }}>
        <Text
          style={{fontSize: 16, color: colors.shadeBlack, fontWeight: 'bold'}}>
          {item.name}
        </Text>
        <Text style={{fontSize: 14, color: colors.lightBlack}}>
          {item.mobile}
        </Text>
        <Text style={{fontSize: 14, color: colors.lightBlack}}>
          {item.address}
        </Text>
      </View>
    </View>
  )

  return (
    <Header
      title={'Billing Address'}
      backgroundColor={colors.white}
      back={back}
      height={HEIGHT * 0.07}
      color={colors.black}
      borderBottomWidth={1}>
      <StatusBar barStyle="dark-content" />
      <View style={{marginHorizontal: WIDTH * 0.05, marginTop: HEIGHT * 0.025}}>
        <Text style={{fontSize: 16, color: colors.black}}>
          Pervious saved address
        </Text>

        <FlatList
          data={data}
          renderItem={({item}) => <SelectAddress item={item} />}
          keyExtractor={item => item.id}
        />

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{height: HEIGHT * 0.26}}>
          <Form />
        </ScrollView>

        <View
          style={{
            flexDirection: 'row',
            marginTop:
              Platform.OS === 'android' ? HEIGHT * 0.07 : HEIGHT * 0.024,
          }}>
          <Pressable
            style={{
              height: WIDTH * 0.05,
              width: WIDTH * 0.05,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'black',
            }}>
            <Image source={tickIcon} />
          </Pressable>
          <Text
            style={{
              fontSize: 16,
              color: colors.black,
              marginLeft: WIDTH * 0.03,
              marginBottom: HEIGHT * 0.024,
            }}>
            Save this address for future order
          </Text>
        </View>
      </View>
      <CommonButton
        title={'CONTINUE'}
        height={HEIGHT * 0.067}
        backgroundColor={colors.black}
        color={colors.white}
        marginHorizontal={WIDTH * 0.05}
      />
    </Header>
  )
}

export default AddressScreen
