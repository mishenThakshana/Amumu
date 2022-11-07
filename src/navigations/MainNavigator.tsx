import {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Orders, Inbox, Wallet, Profile} from 'src/screens';
import HomeNavigator from './HomeNavigator';
import {colors, routes} from 'src/constants';
import Ionicon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const MainNavigator: FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {height: 60, paddingBottom: 8},
      }}>
      <Tab.Screen
        name={routes.HOME_NAVIGATOR}
        component={HomeNavigator}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Ionicon
              name={focused ? 'ios-home' : 'ios-home-outline'}
              color={colors.primary}
              size={size}
            />
          ),
          tabBarActiveTintColor: colors.primary,
          tabBarLabel: 'Home',
          tabBarLabelStyle: {
            fontFamily: 'UberMedium',
            color: colors.primary,
          },
        }}
      />
      <Tab.Screen
        name={routes.ORDERS}
        component={Orders}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Ionicon
              name={focused ? 'ios-cart' : 'ios-cart-outline'}
              color={colors.primary}
              size={size}
            />
          ),
          tabBarLabel: 'Orders',
          tabBarLabelStyle: {
            fontFamily: 'UberMedium',
            color: colors.primary,
          },
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Ionicon
              name={
                focused
                  ? 'ios-chatbubble-ellipses'
                  : 'ios-chatbubble-ellipses-outline'
              }
              color={colors.primary}
              size={size}
            />
          ),
          tabBarLabel: 'Inbox',
          tabBarLabelStyle: {
            fontFamily: 'UberMedium',
            color: colors.primary,
          },
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Ionicon
              name={focused ? 'ios-wallet' : 'ios-wallet-outline'}
              color={colors.primary}
              size={size}
            />
          ),
          tabBarLabel: 'Wallet',
          tabBarLabelStyle: {
            fontFamily: 'UberMedium',
            color: colors.primary,
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Ionicon
              name={focused ? 'ios-person' : 'ios-person-outline'}
              color={colors.primary}
              size={size}
            />
          ),
          tabBarLabel: 'Profile',
          tabBarLabelStyle: {
            fontFamily: 'UberMedium',
            color: colors.primary,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
