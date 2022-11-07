import {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {colors} from 'src/constants';

interface DealInterface {
  label: string;
  active?: boolean;
}

const Deal: FC<DealInterface> = ({label, active = false}) => {
  return (
    <TouchableOpacity>
      <View
        style={[
          {
            borderWidth: 2,
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 20,
            paddingVertical: 10,
            marginHorizontal: 5,
          },
          active && {backgroundColor: colors.primary},
        ]}>
        <Text
          style={[{color: colors.primary}, active && {color: colors.accent}]}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Deal;
