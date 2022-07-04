import {View, Text} from 'react-native'
import React from 'react'
import {colors} from '../constants/colors'

const SectionHeading = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 18, color: colors.black, fontWeight: 'bold'}}>
        {props.title}
      </Text>
      <Text style={{fontSize: 13, color: colors.black}}>View All</Text>
    </View>
  )
}

export default SectionHeading
