import {Pressable, View} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';
import {HEIGHT, WIDTH} from '../constants/Dimensions';

const RadioButton = ({radioActive, setRadioActive, id}) => {
  return (
    <Pressable
      onPress={() => setRadioActive(id)}
      style={{
        height: WIDTH * 0.062,
        width: WIDTH * 0.062,
        borderRadius: WIDTH * 0.031,
        borderWidth: WIDTH * 0.0051,
        borderColor: radioActive === id ? colors.black : colors.borderGrey,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {radioActive === id ? (
        <View
          style={{
            height:WIDTH * 0.04,
            width: WIDTH * 0.04,
            borderRadius: WIDTH * 0.021,
            backgroundColor: colors.black,
          }}
        />
      ) : null}
    </Pressable>
  );
};

export default RadioButton;
