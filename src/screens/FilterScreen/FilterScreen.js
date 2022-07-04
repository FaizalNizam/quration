import {View, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import {colors} from '../../constants/colors';
import {back} from '../../assets/images';
import {HEIGHT, WIDTH} from '../../constants/Dimensions';
import {CheckBox, CommonButton, RadioButton} from '../../components';

const sortBy = [
  {
    id: 1,
    title: 'Featured',
  },
  {
    id: 2,
    title: 'Newest',
  },
  {
    id: 3,
    title: 'Price: Low-High',
  },
  {
    id: 4,
    title: 'Price: High-Low',
  },
];

const categories = [
  {
    id: 1,
    title: 'Cloths',
  },
  {
    id: 2,
    title: 'Shoes',
  },
  {
    id: 3,
    title: 'Shirts',
  },
  {
    id: 4,
    title: 'T - Shirts',
  },
  {
    id: 5,
    title: 'Winter cloths',
  },
];

const FilterScreen = () => {
  console.log('height', HEIGHT * 0.057);
  console.log('width', WIDTH * 0.411);

  const [radioActive, setRadioActive] = useState('');

  const SortBy = ({item}) => (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: HEIGHT * 0.013,
      }}>
      <RadioButton
        radioActive={radioActive}
        setRadioActive={setRadioActive}
        id={item.id}
      />
      <Text
        style={{color: colors.black, fontSize: 16, marginLeft: WIDTH * 0.02}}>
        {item.title}
      </Text>
    </View>
  );

  const Categories = ({item}) => (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: HEIGHT * 0.013,
      }}>
      <CheckBox />
      <Text
        style={{color: colors.black, fontSize: 16, marginLeft: WIDTH * 0.03}}>
        {item.title}
      </Text>
    </View>
  );

  return (
    <Header
      title={'Filter'}
      backgroundColor={colors.white}
      back={back}
      height={HEIGHT * 0.07}
      color={colors.black}
      borderBottomWidth={1}>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: colors.lightGrey,
          marginHorizontal: WIDTH * 0.05,
          paddingBottom: HEIGHT * 0.02,
        }}>
        <Text
          style={{fontSize: 18, color: colors.gold, marginTop: HEIGHT * 0.025}}>
          Sort By
        </Text>
        <FlatList
          data={sortBy}
          renderItem={({item}) => <SortBy item={item} />}
          style={{marginTop: HEIGHT * 0.015}}
        />
      </View>

      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: colors.lightGrey,
          marginHorizontal: WIDTH * 0.05,
          paddingBottom: HEIGHT * 0.02,
        }}>
        <Text
          style={{fontSize: 18, color: colors.gold, marginTop: HEIGHT * 0.032}}>
          Categories (205)
        </Text>
        <FlatList
          data={categories}
          renderItem={({item}) => <Categories item={item} />}
          style={{marginTop: HEIGHT * 0.015}}
        />
      </View>

      <View
        style={{
          height: HEIGHT * 0.17,
          borderBottomWidth: 1,
          borderBottomColor: colors.lightGrey,
          marginHorizontal: WIDTH * 0.05,
          paddingBottom: HEIGHT * 0.0,
        }}>
        <Text
          style={{fontSize: 18, color: colors.gold, marginTop: HEIGHT * 0.032}}>
          Price Range
        </Text>

        <View></View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginTop: HEIGHT * 0.04,
          marginHorizontal: WIDTH * 0.05,
          justifyContent: 'space-between',
        }}>
        <CommonButton
          title={'RESET'}
          height={HEIGHT * 0.057}
          width={WIDTH * 0.43}
          backgroundColor={colors.white}
          borderColor={colors.lightBlack}
          borderWidth={0.5}
          color={colors.black}
        />

        <CommonButton
          title={'APPLY'}
          height={HEIGHT * 0.057}
          width={WIDTH * 0.43}
          backgroundColor={colors.black}
          color={colors.white}
        />
      </View>
    </Header>
  );
};

export default FilterScreen;
