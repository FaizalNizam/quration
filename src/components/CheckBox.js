import {View, Text, Pressable, Image} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../constants/colors';
import {tickIcon} from '../assets/images';
import {HEIGHT, WIDTH} from '../constants/Dimensions';

const CheckBox = () => {
  const [active, setActive] = useState(false);

  return (
    <Pressable
      onPress={() => setActive(!active)}
      style={{
        height: WIDTH * 0.06,
        width: WIDTH * 0.06,
        borderWidth: 1.5,
        borderColor: active ? colors.black : colors.borderGrey,
        borderRadius: 4,
      }}>
      {active && (
        <View
          style={{
            flex: 1,
            backgroundColor: colors.black,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image source={tickIcon} />
        </View>
      )}
    </Pressable>
  );
};

export default CheckBox;
