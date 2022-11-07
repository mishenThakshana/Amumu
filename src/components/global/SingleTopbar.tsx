import {View, Text, TouchableOpacity} from 'react-native';
import {colors} from 'src/constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {FC} from 'react';

interface SingleTopbarInterface {
  title: string;
  navigation: any;
}

const SingleTopbar: FC<SingleTopbarInterface> = ({title, navigation}) => {
  return (
    <View
      style={{
        margin: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-ios" size={26} color={colors.primary} />
        </TouchableOpacity>
      </View>
      <View>
        <Text
          style={{color: colors.primary, fontSize: 18, fontFamily: 'UberBold'}}>
          {title}
        </Text>
      </View>
      <View>
        <Ionicon name="ios-search-outline" size={24} color={colors.primary} />
      </View>
    </View>
  );
};

export default SingleTopbar;
