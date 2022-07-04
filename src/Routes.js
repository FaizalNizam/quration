import * as React from 'react'
import {View, Text, Platform, Image} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {
  createNativeStackNavigator,
  TransitionPresets,
} from '@react-navigation/native-stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import {
  AddressScreen,
  CheckOutScreen,
  DeliveryMethodScreen,
  DesignerSelectScreen,
  DesignersScreen,
  FeaturedScreen,
  FilterScreen,
  HomeScreen,
  MyOrderScreen,
  OrderDetailsScreen,
  ProductListing,
  ProfileScreen,
  ShoppingBag,
  SplashScreen,
  WishlistScreen,
} from './screens'
import {navigationRef} from './routeNavigation'
import {WIDTH, HEIGHT} from './constants/dimensions'
import {colors} from './constants/colors'
import {
  homeIcon,
  searchIcon,
  listIcon,
  favouriteIcon,
  profileIcon,
} from './assets/images'

const RoutesStack = createNativeStackNavigator()
const HomeStack = createNativeStackNavigator()
const SearchStack = createNativeStackNavigator()
const ListStack = createNativeStackNavigator()
const FavouriteStack = createNativeStackNavigator()
const ProfileStack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

// const Home = () => {
//   return (
//     <HomeStack.Navigator
//       initialRouteName="Screen1"
//       screenOptions={{
//         headerShown: false,
//         gestureEnabled: true,
//       }}>
//       <HomeStack.Screen name="Screen1" component={HomeScreen} />
//     </HomeStack.Navigator>
//   )
// }

// const Search = () => {
//   return (
//     <SearchStack.Navigator
//       initialRouteName="Screen2"
//       screenOptions={{
//         headerShown: false,
//         gestureEnabled: true,
//       }}>
//       <SearchStack.Screen name="Screen2" component={Screen1} />
//     </SearchStack.Navigator>
//   )
// }

// const List = ({style, lang}) => {
//   return (
//     <ListStack.Navigator
//       initialRouteName="Screen1"
//       screenOptions={{
//         headerShown: false,
//       }}>
//       <ListStack.Screen name="Screen1" component={Screen1} />
//     </ListStack.Navigator>
//   )
// }

// const Favourite = ({style, lang}) => {
//   return (
//     <FavouriteStack.Navigator
//       initialRouteName="Screen1"
//       screenOptions={{
//         headerShown: false,
//       }}>
//       <FavouriteStack.Screen name="Screen1" component={Screen1} />
//     </FavouriteStack.Navigator>
//   )
// }
// const Profile = ({style, lang}) => {
//   return (
//     <ProfileStack.Navigator
//       initialRouteName="ProfileScreen"
//       screenOptions={{
//         headerShown: false,
//       }}>
//       <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
//     </ProfileStack.Navigator>
//   )
// }

const TabScreens = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        // gestureDirection: "vertical",
        gestureEnabled: true,
        // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={homeIcon}
              style={{
                tintColor: focused ? colors.black : null,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={FeaturedScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={searchIcon}
              style={{
                tintColor: focused ? colors.black : null,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="DesignerSelectScreen"
        component={DesignerSelectScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={listIcon}
              style={{
                tintColor: focused ? colors.black : null,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="WishlistScreen"
        component={WishlistScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={favouriteIcon}
              style={{
                tintColor: focused ? colors.black : null,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={profileIcon}
              style={{
                tintColor: focused ? colors.black : null,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const Routes = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RoutesStack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
          cardStyleInterpolator: ({current: {progress}}) => {
            return {cardStyle: {opacity: progress}}
          },
          transitionSpec: {
            open: {animation: 'timing', config: {duration: 500}},
            close: {animation: 'timing', config: {duration: 500}},
          },
        }}>
        {/* <RoutesStack.Screen name="SplashScreen" component={SplashScreen} />

        <RoutesStack.Screen name="FeaturedScreen" component={FeaturedScreen} />

        <RoutesStack.Screen
          name="DesignersScreen"
          component={DesignersScreen}
        />

        <RoutesStack.Screen name="ProfileScreen" component={ProfileScreen} />

        <RoutesStack.Screen
          name="DesignerSelectScreen"
          component={DesignerSelectScreen}
        />

        <RoutesStack.Screen name="WishlistScreen" component={WishlistScreen} />

        <RoutesStack.Screen name="Tabs" component={TabScreens} />

        <RoutesStack.Screen name="AddressScreen" component={AddressScreen} />

        <RoutesStack.Screen
          name="DeliveryMethodScreen"
          component={DeliveryMethodScreen}
        />

        <RoutesStack.Screen
          name="OrderDetailsScreen"
          component={OrderDetailsScreen}
        /> */}

        {/* <RoutesStack.Screen name="MyOrderScreen" component={MyOrderScreen} /> */}

        {/* <RoutesStack.Screen name="ShoppingBag" component={ShoppingBag} /> */}

        {/* <RoutesStack.Screen name="CheckOutScreen" component={CheckOutScreen} /> */}

        {/* <RoutesStack.Screen name="ProductListing" component={ProductListing} /> */}

        {/* <RoutesStack.Screen name="HomeScreen" component={HomeScreen} /> */}

        <RoutesStack.Screen name="Tabs" component={TabScreens} />

        <RoutesStack.Screen name="FilterScreen" component={FilterScreen} />
      </RoutesStack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
