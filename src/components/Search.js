import {View, TextInput, Image, Pressable} from 'react-native'
import React from 'react'
import {HEIGHT, WIDTH} from '../constants/Dimensions'
import {filter, searchIcon} from '../assets/images'
import {colors} from '../constants/colors'

const Search = ({filterNavigation}) => {
  return (
    <View
      style={{
        marginTop: HEIGHT * 0.03,
        height: HEIGHT * 0.06,
        backgroundColor: 'rgba(242, 242, 242, 0.72)',
        flexDirection: 'row',
        marginHorizontal: WIDTH * 0.052,
      }}>
      <Pressable
        style={{
          width: WIDTH * 0.11,
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: WIDTH * 0.02,
        }}>
        <Image source={searchIcon} />
      </Pressable>
      <TextInput
        style={{fontSize: 17, width: WIDTH * 0.64, marginLeft: WIDTH * 0.012}}
        placeholder="Search"
        placeholderTextColor={'#868686'}
      />
      <Pressable
        onPress={filterNavigation}
        style={{
          width: WIDTH * 0.131,
          backgroundColor: colors.black,
          alignItems: 'center',
          justifyContent: 'center',
          height: HEIGHT * 0.0474,
          width: HEIGHT * 0.0474,
          alignSelf: 'center',
        }}>
        <Image source={filter} />
      </Pressable>
    </View>
  )
}

export default Search
