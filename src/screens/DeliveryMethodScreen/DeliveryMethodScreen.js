import {View, Text, FlatList, Platform, StatusBar} from 'react-native'
import React, {useState} from 'react'
import Header from '../../components/Header'
import {colors} from '../../constants/colors'
import {back} from '../../assets/images'
import {HEIGHT, WIDTH} from '../../constants/Dimensions'
import {CommonButton, RadioButton, SucessfullModal} from '../../components'

const DeliveryMethodScreen = () => {
  console.log('heighttt', HEIGHT * 0.1)
  console.log('width', WIDTH * 0.2)

  const [radioActive, setRadioActive] = useState('')
  const [visible, setVisible] = useState(false)

  const data = [
    {
      id: 1,
      name: 'Normal Delivery',
      period: 'Delivery within 10 days',
      mode: 'FREE',
    },
    {
      id: 2,
      name: 'Express Delivery',
      period: 'Delivery within 3 days',
      mode: 'QAR 25',
    },
  ]

  const SelectAddress = ({item}) => (
    <View
      style={{
        height: HEIGHT * 0.086,
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
          width: WIDTH * 0.52,
          marginLeft: WIDTH * 0.04,
          justifyContent: 'center',
        }}>
        <Text
          style={{fontSize: 16, color: colors.shadeBlack, fontWeight: 'bold'}}>
          {item.name}
        </Text>
        <Text style={{fontSize: 14, color: colors.lightBlack}}>
          {item.period}
        </Text>
      </View>

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: colors.gold, fontSize: 17, fontWeight: 'bold'}}>
          {item.mode}
        </Text>
      </View>
    </View>
  )

  return (
    <Header
      title={'Delivery Method'}
      backgroundColor={colors.white}
      back={back}
      borderBottomWidth={1}
      color={colors.black}
      marginTop={HEIGHT * 0.0}
      height={HEIGHT * 0.07}>
      <StatusBar barStyle="dark-content" />
      <View
        style={{
          marginHorizontal: WIDTH * 0.05,
          marginTop: HEIGHT * 0.02,
        }}>
        <Text style={{color: colors.lightBlack}}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor.
        </Text>

        <FlatList
          data={data}
          renderItem={({item}) => <SelectAddress item={item} />}
          keyExtractor={item => item.id}
        />

        <View
          style={{
            marginTop: Platform.OS === 'ios' ? HEIGHT * 0.48 : HEIGHT * 0.54,
          }}
        />
      </View>
      <View style={{marginTop: HEIGHT * 0.01}}>
        <CommonButton
          title={'CONTINUE'}
          height={HEIGHT * 0.067}
          backgroundColor={colors.black}
          color={colors.white}
          marginHorizontal={WIDTH * 0.05}
          press={() => setVisible(!visible)}
        />
      </View>
      <SucessfullModal visible={visible} setVisible={setVisible} />
    </Header>
  )
}

export default DeliveryMethodScreen
