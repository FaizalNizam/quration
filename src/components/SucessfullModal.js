import {View, Text, Image, Modal} from 'react-native'
import React from 'react'
import {colors} from '../constants/colors'
import {qurationLogo} from '../assets/images'
import CommonButton from './CommonButton'
import {HEIGHT, WIDTH} from '../constants/Dimensions'

const SucessfullModal = ({visible, setVisible}) => {
  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={true}
      onRequestClose={() => setVisible(!visible)}>
      <View
        style={{
          backgroundColor: 'rgba(0, 0, 0, .7)',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            height: HEIGHT * 0.51,
            width: WIDTH * 0.88,
            backgroundColor: colors.white,
            alignItems: 'center',
          }}>
          <Image
            source={qurationLogo}
            style={{
              marginTop: HEIGHT * 0.04,
              height: HEIGHT * 0.1,
              width: WIDTH * 0.2,
              resizeMode: 'contain',
            }}
          />
          <Text
            style={{
              fontSize: 16,
              color: colors.shadeBlack,
              fontWeight: 'bold',
              marginTop: HEIGHT * 0.023,
              width: WIDTH * 0.61,
              textAlign: 'center',
            }}>
            The Order Has Been Created Successfully
          </Text>

          <Text
            style={{
              fontSize: 16,
              color: colors.shadeBlack,
              width: WIDTH * 0.569,
              textAlign: 'center',
              marginTop: HEIGHT * 0.015,
            }}>
            you can track the order from the order details page
          </Text>

          <View style={{marginTop: HEIGHT * 0.04}}>
            <CommonButton
              width={WIDTH * 0.652}
              height={HEIGHT * 0.062}
              backgroundColor={colors.black}
              color={colors.white}
              title={'CONTINUE SHOPPING'}
              press={() => setVisible(!visible)}
            />
          </View>

          <View style={{marginTop: HEIGHT * 0.015}}>
            <CommonButton
              width={WIDTH * 0.652}
              height={HEIGHT * 0.062}
              backgroundColor={colors.lightBlack}
              color={colors.white}
              title={'TRACK ORDER'}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default SucessfullModal
