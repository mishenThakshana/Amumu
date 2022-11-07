import {View, TextInput} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import IconBtn from './IconBtn';
import {colors} from 'src/constants';

const Searchbar = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.secondary,
        margin: 20,
        padding: 5,
        borderRadius: 10,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View>
          <Ionicon name="ios-search-outline" size={24} color={colors.primary} />
        </View>
        <View style={{marginHorizontal: 10, width: '70%'}}>
          <TextInput
            placeholder="Search"
            placeholderTextColor={colors.darkGray}
            style={{fontSize: 16, fontFamily: 'UberMedium'}}
          />
        </View>
      </View>
      <View>
        <View>
          <IconBtn icon="ios-options-outline" />
        </View>
      </View>
    </View>
  );
};

export default Searchbar;
