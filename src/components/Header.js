import {
  Text,
  Pressable,
  Image,
  View,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native'
import React from 'react'
import {HEIGHT, WIDTH} from '../constants/Dimensions'
import {colors} from '../constants/colors'

const Header = props => {
  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={{backgroundColor: props.backgroundColor, flex: 1}}>
        <View
          style={{
            marginHorizontal: WIDTH * 0.05,
            height: props.height,
            borderBottomWidth: props.borderBottomWidth,
            borderBottomColor: colors.lightGrey,
            backgroundColor: props.backgroundColor,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              height: HEIGHT * 0.05,
              marginTop: props.marginTop,
            }}>
            {props.back && (
              <Pressable
                style={{width: WIDTH * 0.066, marginTop: HEIGHT * 0.008}}>
                <Image
                  source={props.back}
                  style={{
                    height: HEIGHT * 0.023,
                    width: HEIGHT * 0.023,
                    resizeMode: 'contain',
                  }}
                />
              </Pressable>
            )}

            <View style={{flex: 1}}>
              <Text
                style={{
                  fontSize: 18,
                  color: props.color,
                  fontWeight: 'bold',
                  marginTop: HEIGHT * 0.004,
                }}>
                {props.title}
              </Text>
            </View>

            {props.dollarIcon && (
              <Pressable
                style={{
                  width: HEIGHT * 0.04,
                  height: HEIGHT * 0.04,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: props.iconColor,
                  borderRadius: WIDTH * 0.257,
                }}>
                <Image
                  source={props.dollarIcon}
                  style={{
                    height: HEIGHT * 0.023,
                    width: HEIGHT * 0.023,
                    resizeMode: 'contain',
                  }}
                />
              </Pressable>
            )}

            {props.cartIcon && (
              <Pressable
                style={{
                  width: HEIGHT * 0.04,
                  height: HEIGHT * 0.04,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: props.iconColor,
                  borderRadius: WIDTH * 0.257,
                  marginLeft: WIDTH * 0.02,
                }}>
                <Image
                  source={props.cartIcon}
                  style={{
                    height: HEIGHT * 0.023,
                    width: HEIGHT * 0.023,
                    resizeMode: 'contain',
                  }}
                />
              </Pressable>
            )}

            {props.cancel && (
              <Pressable
                style={{
                  width: WIDTH * 0.15,
                  height: HEIGHT * 0.04,
                  alignItems: 'center',
                  marginTop: HEIGHT * 0.004,
                }}>
                <Text style={{fontSize: 18, color: colors.black}}>
                  {props.cancel}
                </Text>
              </Pressable>
            )}
          </View>
        </View>

        <View style={{flex: 1, backgroundColor: 'white'}}>
          {props.children}
        </View>
      </SafeAreaView>

      {props.screenName && Platform.OS === 'ios' && (
        <View style={{backgroundColor: '#FFFFFF', flex: 0.05}} />
      )}
    </View>
  )
}

export default Header
