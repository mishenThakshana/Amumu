import {createStackNavigator} from '@react-navigation/stack';
import {TransitionPresets} from '@react-navigation/stack';
import {Home} from 'src/screens';
import {TopDeals} from 'src/screens/home_screens';
import {routes} from 'src/constants';

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
        headerShown: false,
      }}>
      <Stack.Screen name={routes.HOME} component={Home} />
      <Stack.Screen name={routes.TOP_DEALS} component={TopDeals} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
