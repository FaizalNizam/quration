import {View, Text, Modal, Pressable, Image} from 'react-native'
import React from 'react'
import {colors} from '../constants/colors'
import {messageIcon, phoneIcon, watsappIcon, closeIcon} from '../assets/images'
import {WIDTH, HEIGHT} from '../constants/Dimensions'

const ContactModal = ({visible, setVisible}) => {
  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={true}
      onRequestClose={() => setVisible(!visible)}>
      <View
        style={{
          backgroundColor: 'rgba(0, 0, 0, .5)',
          flex: 1,
          alignItems: 'center',
        }}>
        <View
          style={{
            paddingHorizontal: WIDTH * 0.07,
            width: WIDTH * 0.9,
            height: HEIGHT * 0.323,
            backgroundColor: colors.white,
            marginTop: HEIGHT * 0.214,
          }}>
          <Pressable
            style={{
              position: 'absolute',
              right: WIDTH * 0.03,
              top: HEIGHT * 0.013,
            }}
            onPress={() => setVisible(!visible)}>
            <Image source={closeIcon} />
          </Pressable>

          <Text
            style={{
              color: colors.shadeBlack,
              fontSize: 18,
              fontWeight: 'bold',
              marginTop: HEIGHT * 0.025,
              lineHeight: HEIGHT * 0.031,
            }}>
            Do You Want To Contact Our{'\n'}Customer Service ?
          </Text>

          <Pressable
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: HEIGHT * 0.024,
            }}>
            <View
              style={{
                height: HEIGHT * 0.043,
                width: HEIGHT * 0.043,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: colors.lightGrey,
              }}>
              <Image
                source={phoneIcon}
                style={{
                  height: HEIGHT * 0.025,
                  width: HEIGHT * 0.025,
                  resizeMode: 'cover',
                }}
              />
            </View>
            <Text
              style={{
                marginLeft: WIDTH * 0.026,
                fontSize: 16,
                color: colors.black,
              }}>
              +974 88775544
            </Text>
          </Pressable>

          <Pressable
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: HEIGHT * 0.024,
            }}>
            <View
              style={{
                height: HEIGHT * 0.043,
                width: HEIGHT * 0.043,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: colors.lightGrey,
              }}>
              <Image
                source={messageIcon}
                style={{
                  height: HEIGHT * 0.025,
                  width: HEIGHT * 0.032,
                  resizeMode: 'cover',
                }}
              />
            </View>
            <Text
              style={{
                marginLeft: WIDTH * 0.026,
                fontSize: 16,
                color: colors.black,
              }}>
              contact@quration.qa
            </Text>
          </Pressable>

          <Pressable
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: HEIGHT * 0.024,
            }}>
            <View
              style={{
                height: HEIGHT * 0.043,
                width: HEIGHT * 0.043,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: colors.lightGrey,
              }}>
              <Image
                source={watsappIcon}
                style={{
                  height: HEIGHT * 0.025,
                  width: HEIGHT * 0.025,
                  resizeMode: 'cover',
                }}
              />
            </View>
            <Text
              style={{
                marginLeft: WIDTH * 0.026,
                fontSize: 16,
                color: colors.black,
              }}>
              +974 88775544
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}

export default ContactModal
