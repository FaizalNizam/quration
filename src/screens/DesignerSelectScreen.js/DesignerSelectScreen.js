import {
  View,
  Text,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StatusBar,
} from 'react-native'
import React, {useState} from 'react'
import Header from '../../components/Header'
import {cartIcon, profilePic, women} from '../../assets/images'
import {colors} from '../../constants/colors'
import {WIDTH, HEIGHT} from '../../constants/Dimensions'

const dataMen = [
  {
    id: 1,
    image: profilePic,
    name: 'Domenico Dolce',
    numItems: 576,
  },
  {
    id: 2,
    image: profilePic,
    name: 'Domenico Dolce',
    numItems: 576,
  },
  {
    id: 3,
    image: profilePic,
    name: 'Domenico Dolce',
    numItems: 576,
  },
  {
    id: 4,
    image: profilePic,
    name: 'Domenico Dolce',
    numItems: 576,
  },
  {
    id: 5,
    image: profilePic,
    name: 'Domenico Dolce',
    numItems: 576,
  },
  {
    id: 6,
    image: profilePic,
    name: 'Domenico Dolce',
    numItems: 576,
  },
  {
    id: 7,
    image: profilePic,
    name: 'Domenico Dolce',
    numItems: 576,
  },
  {
    id: 8,
    image: profilePic,
    name: 'Domenico Dolce',
    numItems: 576,
  },
  {
    id: 9,
    image: profilePic,
    name: 'Domenico Dolce',
    numItems: 576,
  },
  {
    id: 10,
    image: profilePic,
    name: 'Domenico Dolce',
    numItems: 576,
  },
]

const dataWomen = [
  {
    id: 1,
    image: women,
    name: 'Salma Khalid',
    numItems: 576,
  },
  {
    id: 2,
    image: women,
    name: 'Salma Khalid',
    numItems: 576,
  },
  {
    id: 3,
    image: women,
    name: 'Salma Khalid',
    numItems: 576,
  },
  {
    id: 4,
    image: women,
    name: 'Salma Khalid',
    numItems: 576,
  },
  {
    id: 5,
    image: women,
    name: 'Salma Khalid',
    numItems: 576,
  },
  {
    id: 6,
    image: women,
    name: 'Salma Khalid',
    numItems: 576,
  },
  {
    id: 7,
    image: women,
    name: 'Salma Khalid',
    numItems: 576,
  },
  {
    id: 8,
    image: women,
    name: 'Salma Khalid',
    numItems: 576,
  },
  {
    id: 9,
    image: women,
    name: 'Salma Khalid',
    numItems: 576,
  },
  {
    id: 10,
    image: women,
    name: 'Salma Khalid',
    numItems: 576,
  },
]

const DesignerSelectScreen = () => {
  console.log('height', HEIGHT * 0.072)
  console.log('width', WIDTH * 0.156)

  const [active, setActive] = useState('men')
  const [data, setData] = useState(dataMen)

  const DesignerButton = ({item}) => {
    return (
      <Pressable
        style={{
          flexDirection: 'row',
          height: HEIGHT * 0.0711,
          marginBottom: HEIGHT * 0.032,
          width: WIDTH * 0.9,
        }}>
        <Image
          source={item.image}
          style={{
            height: HEIGHT * 0.072,
            width: WIDTH * 0.156,
            resizeMode: 'cover',
          }}
        />

        <View style={{justifyContent: 'center', marginLeft: WIDTH * 0.05}}>
          <Text style={{color: colors.shadeBlack, fontSize: 16}}>
            {item.name}
          </Text>
          <Text
            style={{
              color: colors.darkGrey,
              fontSize: 14,
              marginTop: HEIGHT * 0.006,
            }}>
            Total products {item.numItems} items
          </Text>
        </View>
      </Pressable>
    )
  }

  return (
    <Header
      title={'Designers'}
      cartIcon={cartIcon}
      backgroundColor={colors.white}
      color={colors.black}
      iconColor={colors.lightGrey}>
      <StatusBar barStyle="dark-content" />
      <View
        style={{
          flexDirection: 'row',
          marginTop: HEIGHT * 0.02,
          height: HEIGHT * 0.054,
          borderBottomWidth: 1.5,
          borderBottomColor: colors.lightGrey,
        }}>
        <Pressable
          onPress={() => {
            setActive('men'), setData(dataMen)
          }}
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomWidth: 1.5,
            borderBottomColor:
              active === 'men' ? colors.black : colors.lightGrey,
            height: HEIGHT * 0.054,
          }}>
          <Text
            style={{
              color: colors.black,
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            MEN
          </Text>
        </Pressable>

        <Pressable
          onPress={() => {
            setActive('women'), setData(dataWomen)
          }}
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomWidth: 1.5,
            borderBottomColor:
              active === 'women' ? colors.black : colors.lightGrey,
            height: HEIGHT * 0.054,
          }}>
          <Text
            style={{
              color: colors.black,
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            WOMEN
          </Text>
        </Pressable>
      </View>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}>
        <FlatList
          data={data}
          renderItem={({item}) => <DesignerButton item={item} />}
          showsVerticalScrollIndicator={false}
          style={{
            paddingTop: HEIGHT * 0.036,
            marginHorizontal: WIDTH * 0.05,
          }}
        />
        {/* <FlatList
          data={dataWomen}
          renderItem={({item}) => <DesignerButton item={item} />}
          showsVerticalScrollIndicator={false}
          style={{
            paddingTop: HEIGHT * 0.036,
            marginHorizontal: WIDTH * 0.05,
          }}
        /> */}
      </ScrollView>
    </Header>
  )
}

export default DesignerSelectScreen
