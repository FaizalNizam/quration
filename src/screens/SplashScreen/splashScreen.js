import React, {useEffect, useState} from 'react';
import {Image, View, StatusBar, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {logo, logoText} from '../../assets/images';
import {WIDTH, HEIGHT} from '../../constants/Dimensions';

const SplashScreen = (props, context) => {
  const {navigation} = props;

  useEffect(() => {
    setTimeout(async () => {
      navigation.replace('FeaturedScreen');
    }, 500);
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={logoText}
        resizeMode="contain"
        style={{width: WIDTH * 0.8, height: HEIGHT * 0.05}}
      />
    </View>
  );
};

SplashScreen.contextTypes = {
  t: PropTypes.func,
};

export default SplashScreen;
