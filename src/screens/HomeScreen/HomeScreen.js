import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Pressable,
  Image,
  ScrollView,
  FlatList,
  StatusBar,
} from 'react-native'
import React from 'react'
import {
  cartWhiteIcon,
  categoryImage,
  dollarWhiteIcon,
  dummy,
  favblackIcon,
  modelImage,
} from '../../assets/images'
import {HEIGHT, WIDTH} from '../../constants/Dimensions'
import {colors} from '../../constants/colors'
import {CommonButton, Product, SectionHeading} from '../../components'

//Dummy data for top designers section
const designersData = [
  {
    id: 1,
    image: modelImage,
    name: 'Salma Khalid',
  },
  {
    id: 2,
    image: modelImage,
    name: 'Salma Khalid',
  },
  {
    id: 3,
    image: modelImage,
    name: 'Salma Khalid',
  },
  {
    id: 4,
    image: modelImage,
    name: 'Salma Khalid',
  },
  {
    id: 5,
    image: modelImage,
    name: 'Salma Khalid',
  },
]

//Dummy data for featured products section
const FeaturedProductsdata = [
  {
    id: 1,
    design: 'salma khalid',
    product: 'Lined slippers',
    price: '255 QAR',
    image: dummy,
  },
  {
    id: 2,
    design: 'salma khalid',
    product: 'Lined slippers',
    price: '255 QAR',
    image: dummy,
  },
  {
    id: 3,
    design: 'salma khalid',
    product: 'Lined slippers',
    price: '255 QAR',
    image: dummy,
  },
  {
    id: 4,
    design: 'salma khalid',
    product: 'Lined slippers',
    price: '255 QAR',
    image: dummy,
  },
  {
    id: 5,
    design: 'salma khalid',
    product: 'Lined slippers',
    price: '255 QAR',
    image: dummy,
  },
  {
    id: 6,
    design: 'salma khalid',
    product: 'Lined slippers',
    price: '255 QAR',
    image: dummy,
  },
]

//Dummy data for categories section
const CategoriesData = [
  {
    id: 1,
    title: 'Shirts',
    image: categoryImage,
  },
  {
    id: 2,
    title: 'Shorts',
    image: categoryImage,
  },
  {
    id: 3,
    title: 'Shoes',
    image: categoryImage,
  },
  {
    id: 4,
    title: 'T-Shirts',
    image: categoryImage,
  },
  {
    id: 5,
    title: 'Trousers',
    image: categoryImage,
  },
  {
    id: 6,
    title: 'Jackets',
    image: categoryImage,
  },
]

const HomeScreen = () => {
  console.log('heighttt', HEIGHT * 0.54)
  console.log('width', WIDTH * 0.103)

  const Designers = ({item}) => (
    <Pressable style={{marginRight: WIDTH * 0.04}}>
      <Image
        source={item.image}
        style={{height: WIDTH * 0.206, width: WIDTH * 0.206}}
      />
      <View style={{width: WIDTH * 0.206, alignItems: 'center'}}>
        <Text style={{fontSize: 16, color: colors.black}}>{item.name}</Text>
      </View>
    </Pressable>
  )

  const Categories = ({item}) => (
    <Pressable style={{marginRight: WIDTH * 0.04, alignItems: 'center'}}>
      <View
        style={{
          height: WIDTH * 0.18,
          width: WIDTH * 0.18,
          backgroundColor: colors.borderGrey,
          borderRadius: WIDTH * 0.257,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={item.image}
          style={{height: WIDTH * 0.103, width: WIDTH * 0.103}}
        />
      </View>

      <Text
        style={{fontSize: 16, color: colors.black, marginTop: HEIGHT * 0.01}}>
        {item.title}
      </Text>
    </Pressable>
  )

  return (
    <View style={{flex: 1}}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ImageBackground
        source={modelImage}
        style={{height: HEIGHT * 0.54}}
        resizeMode="cover">
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: HEIGHT * 0.063,
            marginHorizontal: WIDTH * 0.05,
            justifyContent: 'flex-end',
          }}>
          <Pressable
            style={{
              width: HEIGHT * 0.04,
              height: HEIGHT * 0.04,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.darkGrey,
              borderRadius: WIDTH * 0.257,
            }}>
            <Image source={dollarWhiteIcon} />
          </Pressable>

          <Pressable
            style={{
              width: HEIGHT * 0.04,
              height: HEIGHT * 0.04,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.darkGrey,
              borderRadius: WIDTH * 0.257,
              marginLeft: WIDTH * 0.03,
            }}>
            <Image source={cartWhiteIcon} />
          </Pressable>
        </View>

        <View style={{alignItems: 'center', marginTop: HEIGHT * 0.06}}>
          <Text style={{fontSize: 16, color: colors.white}}>NEW ARRIVALS</Text>
          <Text style={{fontSize: 46, color: colors.white, fontWeight: 'bold'}}>
            50% OFF
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: colors.white,
              marginBottom: HEIGHT * 0.05,
            }}>
            Explore the latest styled collection
          </Text>
          <CommonButton
            height={HEIGHT * 0.0474}
            width={WIDTH * 0.35}
            borderWidth={1}
            borderColor={colors.white}
            title={'SHOP NOW'}
            color={colors.white}
          />
        </View>
      </ImageBackground>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginHorizontal: WIDTH * 0.05, marginTop: HEIGHT * 0.05}}>
        <View>
          <SectionHeading title={'Top Designers'} />
          <FlatList
            data={designersData}
            renderItem={({item}) => <Designers item={item} />}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              flexDirection: 'row',
              marginTop: HEIGHT * 0.02,
            }}
          />
        </View>

        <View style={{marginTop: HEIGHT * 0.044}}>
          <SectionHeading title={'Featured Products'} />
          <FlatList
            data={FeaturedProductsdata}
            renderItem={({item}) => <Product item={item} icon={favblackIcon} />}
            horizontal={true}
            style={{marginTop: HEIGHT * 0.022}}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={{marginTop: HEIGHT * 0.013}}>
          <SectionHeading title={'Categories'} />
          <FlatList
            data={CategoriesData}
            renderItem={({item}) => <Categories item={item} />}
            horizontal={true}
            style={{marginTop: HEIGHT * 0.022}}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={{marginTop: HEIGHT * 0.045, marginBottom: HEIGHT * 0.04}}>
          <SectionHeading title={'Recommanded For You'} />
          <FlatList
            data={FeaturedProductsdata}
            renderItem={({item}) => <Product item={item} icon={favblackIcon} />}
            horizontal={true}
            style={{marginTop: HEIGHT * 0.022}}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </View>
  )
}

export default HomeScreen
