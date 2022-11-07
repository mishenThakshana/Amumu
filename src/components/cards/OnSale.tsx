import {FC} from 'react';
import {View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {colors} from 'src/constants';

interface onSaleInterface {}

const OnSale: FC<onSaleInterface> = () => {
  return (
    <View
      style={{
        backgroundColor: colors.secondary,
        margin: 20,
        padding: 20,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View>
        <Text
          style={{fontSize: 30, color: colors.primary, fontFamily: 'UberBold'}}>
          20%
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: colors.primary,
            fontFamily: 'UberBold',
            marginVertical: 10,
          }}>
          Week Deals!
        </Text>
        <Text
          style={{
            fontSize: 13,
            color: colors.primary,
          }}>
          Get a new car discount,{'\n'}
          only valid till this week
        </Text>
      </View>
      <View>
        <FastImage
          style={{width: 180, height: 180}}
          source={require('src/assets/images/cars/bmw.png')}
          resizeMode={FastImage.resizeMode.center}
        />
      </View>
    </View>
  );
};

export default OnSale;
