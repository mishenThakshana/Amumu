import {FC} from 'react';
import {View, Text} from 'react-native';
import {colors} from 'src/constants';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface ScreenTitleInterface {
  icon: string;
  title: string;
  searchHandler?: () => void;
  filterHandler?: () => void;
}

const ScreenTitle: FC<ScreenTitleInterface> = ({
  icon,
  title,
  searchHandler,
  filterHandler,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 15,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 10,
        }}>
        <View style={{marginHorizontal: 5}}>
          <Ionicon name={icon} size={25} color={colors.primary} />
        </View>
        <View style={{marginHorizontal: 5}}>
          <Text
            style={{
              fontSize: 22,
              fontFamily: 'UberBold',
              color: colors.primary,
            }}>
            {title}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 10,
        }}>
        <View style={{marginHorizontal: 5}}>
          <TouchableOpacity onPress={searchHandler}>
            <View>
              <Ionicon
                name="ios-search-outline"
                size={22}
                color={colors.primary}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal: 5}}>
          <TouchableOpacity onPress={filterHandler}>
            <View>
              <Ionicon
                name="ios-options-outline"
                size={22}
                color={colors.primary}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ScreenTitle;
