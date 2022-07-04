import {
  View,
  Text,
  StatusBar,
  Image,
  Pressable,
  FlatList,
  Platform,
} from 'react-native'
import React, {useState} from 'react'
import {colors} from '../../constants/colors'
import {HEIGHT, WIDTH} from '../../constants/Dimensions'
import Header from '../../components/Header'
import {backWhite} from '../../assets/images'
import {cartWhiteIcon} from '../../assets/images'
import {dollarWhiteIcon} from '../../assets/images'
import {dp} from '../../assets/images'
import {dataProfile} from '../../constants/dataProfile'
import ContactModal from '../../components/ContactModal'

const ProfileScreen = ({route}) => {
  console.log('heightttt', HEIGHT * 0.031)
  console.log('width', WIDTH * 0.05)

  const [visible, setVisible] = useState(false)

  const ProfileButton = ({item}) => (
    <Pressable
      onPress={item.title === 'CONTACT US' ? () => setVisible(!visible) : null}
      style={{
        flexDirection: 'row',
        height: HEIGHT * 0.083,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: WIDTH * 0.05,
        marginRight: WIDTH * 0.05,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={item.icon} />

        <Text
          style={{
            marginLeft: WIDTH * 0.052,
            fontSize: 16,
            color: colors.shadeBlack,
          }}>
          {item.title}
        </Text>

        {item.title === 'NOTIFICATIONS' && (
          <View
            style={{
              width: WIDTH * 0.06,
              height: WIDTH * 0.06,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.black,
              marginLeft: WIDTH * 0.02,
            }}>
            <Text style={{color: colors.white, fontSize: 16}}>3</Text>
          </View>
        )}
      </View>
      <Image source={item.forward} />
    </Pressable>
  )

  const Seperator = ({leadingItem}) => (
    <View
      style={{
        borderBottomWidth: leadingItem.border,
        borderBottomColor: colors.lightGrey,
        marginLeft: leadingItem.margin,
        marginRight: leadingItem.margin,
      }}
    />
  )

  return (
    <Header
      title={'My Profile'}
      back={backWhite}
      cartIcon={cartWhiteIcon}
      dollarIcon={dollarWhiteIcon}
      color={colors.white}
      iconColor={colors.darkGrey}
      height={HEIGHT * 0.13}
      marginTop={Platform.OS === 'ios' ? HEIGHT * 0.02 : HEIGHT * 0.05}
      backgroundColor={colors.black}
      screenName={route.name}>
      <StatusBar backgroundColor={colors.black} barStyle="light-content" />
      
      <Image
        source={dp}
        style={{
          position: 'absolute',
          marginTop: HEIGHT * -0.052,
          alignSelf: 'center',
          height: HEIGHT * 0.12,
          width: HEIGHT * 0.12,
        }}
      />

      <View
        style={{
          alignItems: 'center',
          marginHorizontal: WIDTH * 0.05,
          marginTop: HEIGHT * 0.072,
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: colors.black}}>
          Ranya alzahury
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: colors.lightBlack,
            marginTop: HEIGHT * 0.006,
          }}>
          576 items
        </Text>
      </View>

      <FlatList
        data={dataProfile}
        renderItem={({item}) => <ProfileButton item={item} />}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={({leadingItem}) => (
          <Seperator leadingItem={leadingItem} />
        )}
        style={{marginTop: HEIGHT * 0.01}}
      />

      <ContactModal visible={visible} setVisible={setVisible} />
    </Header>
  )
}

export default ProfileScreen
