import {View, Text, Pressable, Image} from 'react-native';
import React, {useState} from 'react';
import {HEIGHT, WIDTH} from '../constants/Dimensions';
import {colors} from '../constants/colors';
import {dropDownIcon} from '../assets/images';

const DropDownButton = () => {
  const [visible, setVisible] = useState(false);

  const renderDropDown = () => {
    if (visible) {
      return (
        <View
          style={{
            width: WIDTH * 0.11,
            top: HEIGHT * 0.03,
            position: 'absolute',
            alignItems: 'center',
            backgroundColor: colors.white,
          }}>
          <Text style={{color: colors.black}}>1</Text>
          <Text style={{color: colors.black}}>2</Text>
          <Text style={{color: colors.black}}>3</Text>
        </View>
      );
    }
  };

  return (
    <View
      style={{
        height: HEIGHT * 0.031,
        width: WIDTH * 0.213,
        borderWidth: 1,
        borderColor: colors.lightGrey,
        flexDirection: 'row',
      }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          borderRightWidth: 1,
          borderRightColor: colors.lightGrey,
          width: WIDTH * 0.0872,
          flex: 1,
        }}>
        <Text style={{fontSize: 12, color: colors.lightBlack}}>Qty</Text>
      </View>

      <Pressable
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => setVisible(!visible)}>
        {renderDropDown()}
        <Image source={dropDownIcon} style={{marginLeft: WIDTH * 0.03}} />
      </Pressable>
    </View>
  );
};

export default DropDownButton;
