import {View,TextInput} from 'react-native';
import React from 'react';
import {HEIGHT} from '../constants/Dimensions';
import { colors } from '../constants/colors';

const Form = () => {
  const formData = [
    {
      id: 1,
      title: 'Full Name',
    },
    {
      id: 2,
      title: 'Mobile Number',
    },
    {
      id: 3,
      title: 'Flat No',
    },
    {
      id: 4,
      title: 'Building no',
    },
    {
      id: 5,
      title: 'Street no',
    },
    {
      id: 6,
      title: 'Zone No',
    },
  ];

  return (
    <View>
      {formData.map((obj, i) => (
        <View
          style={{
            height: HEIGHT * 0.07,
            borderBottomWidth: 1,
            borderBottomColor: colors.borderShade,
          }}
          key={i}>
          <TextInput
            placeholder={obj.title}
            placeholderTextColor={colors.placeholderGrey}
            style={{paddingTop: HEIGHT * 0.032, fontSize: 16}}
          />
        </View>
      ))}
    </View>
  );
};

export default Form;
