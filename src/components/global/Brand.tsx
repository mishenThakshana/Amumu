import {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {colors} from 'src/constants';

interface BrandInterface {
  brand: any;
  label: string;
}

const Brand: FC<BrandInterface> = ({brand, label}) => {
  return (
    <TouchableOpacity>
      <View style={{marginHorizontal: 20}}>
        <View
          style={{
            backgroundColor: colors.secondary,
            width: 60,
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50,
          }}>
          <FastImage style={{width: 30, height: 30}} source={brand} />
        </View>
        <View style={{marginVertical: 10, alignItems: 'center'}}>
          <Text style={{color: colors.primary, fontFamily: 'UberMedium'}}>
            {label}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Brand;
