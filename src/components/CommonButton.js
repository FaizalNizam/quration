import {Text, Pressable} from 'react-native'
import React from 'react'
import {HEIGHT, WIDTH} from '../constants/Dimensions'

const CommonButton = props => {
  return (
    <Pressable
      onPress={props.press}
      style={{
        height: props.height,
        backgroundColor: props.backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: props.marginHorizontal,
        width: props.width,
        borderWidth: props.borderWidth,
        borderColor: props.borderColor,
      }}>
      <Text style={{color: props.color, fontSize: 18}}>{props.title}</Text>
    </Pressable>
  )
}

export default CommonButton
