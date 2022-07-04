import {View, Text, FlatList} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import {HEIGHT, WIDTH} from '../../constants/Dimensions';
import {back} from '../../assets/images';
import {colors} from '../../constants/colors';
import {CommonButton, OrderedItems} from '../../components';
import {data} from '../../constants/data';

const ShoppingBag = () => {
  console.log('height', HEIGHT * 0.15);
  console.log('width', WIDTH * 0.0872);

  return (
    <Header
      title={'Shopping Bag'}
      backgroundColor={colors.white}
      back={back}
      height={HEIGHT * 0.07}
      color={colors.black}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <OrderedItems
            item={item}
            title2={'Designed by'}
            title3={'Colour'}
            title4={'Size'}
            id={'ShoppingBag'}
          />
        )}
        numColumns={1}
        style={{marginHorizontal: WIDTH * 0.05, marginTop: HEIGHT * 0.0}}
        showsVerticalScrollIndicator={false}
      />

      <View
        style={{
          height: HEIGHT * 0.15,
          backgroundColor: colors.softGrey,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 16,
            color: colors.black,
            alignSelf: 'center',
            marginBottom: HEIGHT * 0.017,
          }}>
          Grand total :{' '}
          <Text style={{fontSize: 18, fontWeight: 'bold', color: colors.black}}>
            158.9 QAR (4 items)
          </Text>
        </Text>
        <CommonButton
          title={'CHECKOUT'}
          height={HEIGHT * 0.057}
          backgroundColor={colors.black}
          color={colors.white}
          marginHorizontal={WIDTH * 0.05}
        />
      </View>
    </Header>
  );
};

export default ShoppingBag;
