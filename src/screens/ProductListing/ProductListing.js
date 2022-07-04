import {
  View,
  Text,
  ImageBackground,
  Pressable,
  Image,
  FlatList,
  ScrollView,
  StatusBar,
} from 'react-native'
import React, {useState} from 'react'
import {
  back,
  cartIcon,
  dollarIcon,
  sampleImage,
  dummy,
  favblackIcon,
} from '../../assets/images'
import {colors} from '../../constants/colors'
import {HEIGHT, WIDTH} from '../../constants/Dimensions'
import CommonButton from '../../components/CommonButton'

const sizeData = [
  {
    id: 1,
    title: 'S',
  },
  {
    id: 2,
    title: 'M',
  },
  {
    id: 3,
    title: 'L',
  },
  {
    id: 4,
    title: 'XL',
  },
  {
    id: 5,
    title: 'XXL',
  },
]

const imageData = [
  {
    id: 1,
    image: dummy,
  },
  {
    id: 2,
    image: dummy,
  },
  {
    id: 3,
    image: dummy,
  },
  {
    id: 4,
    image: dummy,
  },
  {
    id: 5,
    image: dummy,
  },
]

const ProductListing = () => {
  console.log('heighttt', HEIGHT * 0.0522)
  console.log('width', WIDTH * 0.113)

  const [active, setActive] = useState('')

  const SizeButton = ({item}) => {
    return (
      <Pressable
        onPress={() => setActive(item.id)}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: WIDTH * 0.113,
          height: WIDTH * 0.113,
          borderWidth: 0.5,
          borderColor: colors.lightBlack,
          marginRight: WIDTH * 0.04,
          backgroundColor: active === item.id ? colors.black : colors.white,
        }}>
        <Text
          style={{
            fontSize: 17,
            color: active === item.id ? colors.white : colors.shadeBlack,
          }}>
          {item.title}
        </Text>
      </Pressable>
    )
  }

  return (
    <View style={{flex: 1}}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ImageBackground
        source={sampleImage}
        style={{height: HEIGHT * 0.54}}
        resizeMode="cover">
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: HEIGHT * 0.063,
            marginHorizontal: WIDTH * 0.05,
            justifyContent: 'space-between',
          }}>
          <Pressable style={{}}>
            <Image source={back} />
          </Pressable>
          <View style={{flexDirection: 'row'}}>
            <Pressable
              style={{
                width: HEIGHT * 0.05,
                height: HEIGHT * 0.05,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: colors.lightGrey,
                borderRadius: WIDTH * 0.257,
              }}>
              <Image source={dollarIcon} />
            </Pressable>

            <Pressable
              style={{
                width: HEIGHT * 0.05,
                height: HEIGHT * 0.05,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: colors.borderGrey,
                borderRadius: WIDTH * 0.257,
                marginLeft: WIDTH * 0.03,
              }}>
              <Image source={cartIcon} />
            </Pressable>
          </View>
        </View>
      </ImageBackground>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          marginHorizontal: WIDTH * 0.05,
          marginTop: HEIGHT * 0.025,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 12, color: colors.lightBlack}}>
            Designed by{' '}
            <Text
              style={{fontSize: 12, color: colors.black, fontWeight: 'bold'}}>
              Ranya Alzahury
            </Text>
          </Text>
          <Image source={favblackIcon} />
        </View>

        <Text
          style={{
            fontSize: 18,
            color: colors.grey,
            fontWeight: 'bold',
            marginTop: HEIGHT * 0.01,
          }}>
          Lined slippers
        </Text>

        <Text
          style={{fontSize: 18, color: colors.gold, marginTop: HEIGHT * 0.005}}>
          350 QAR
        </Text>

        <Text
          style={{
            fontSize: 14,
            color: colors.lightBlack,
            marginTop: HEIGHT * 0.02,
            lineHeight: HEIGHT * 0.028,
          }}>
          Featuring petite, emerald-green leaves, the China Doll plant is an
          eye-catching houseplant perfect for adding a pop of greenery to any
          space.…
          <Pressable style={{}}>
            <Text
              style={{
                fontSize: 14,
                color: colors.black,
                textDecorationLine: 'underline',
              }}>
              READ MORE
            </Text>
          </Pressable>
        </Text>

        <Text
          style={{
            fontSize: 14,
            color: colors.lightBlack,
            marginTop: HEIGHT * 0.01,
          }}>
          Colour :{' '}
          <Text style={{fontSize: 14, color: colors.black}}>Brown</Text>
        </Text>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{marginTop: HEIGHT * 0.017}}>
          {imageData.map((obj, i) => (
            <Image
              key={i}
              source={obj.image}
              style={{
                height: HEIGHT * 0.14,
                width: WIDTH * 0.22,
                marginRight: WIDTH * 0.038,
              }}
              resizeMode="cover"
            />
          ))}
        </ScrollView>

        <Text
          style={{
            marginTop: HEIGHT * 0.03,
            fontSize: 18,
            fontWeight: 'bold',
            color: colors.black,
          }}>
          Size
        </Text>

        <FlatList
          data={sizeData}
          keyExtractor={item => item.id}
          renderItem={({item}) => <SizeButton item={item} />}
          style={{marginTop: HEIGHT * 0.017, paddingBottom: HEIGHT * 0.05}}
          contentContainerStyle={{flexDirection: 'row'}}
        />
      </ScrollView>

      <CommonButton
        height={HEIGHT * 0.08}
        backgroundColor={colors.black}
        title={'ADD TO BAG'}
        color={colors.white}
      />
    </View>
  )
}

export default ProductListing
