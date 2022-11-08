import {FC} from 'react';
import {View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {colors} from 'src/constants';

interface onSaleInterface {
  percentage: string;
  title: string;
  description: string;
  image: any;
}

const OnSale: FC<onSaleInterface> = ({
  percentage,
  title,
  description,
  image,
}) => {
  return (
    <View
      style={{
        backgroundColor: colors.secondary,
        marginHorizontal: 20,
        marginVertical: 5,
        padding: 20,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View>
        <Text
          style={{fontSize: 30, color: colors.primary, fontFamily: 'UberBold'}}>
          {percentage}
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: colors.primary,
            fontFamily: 'UberBold',
            marginVertical: 10,
          }}>
          {title}
        </Text>
        <Text
          style={{
            fontSize: 13,
            color: colors.primary,
          }}>
          {description}
        </Text>
      </View>
      <View>
        <FastImage
          style={{width: 180, height: 180}}
          source={image}
          resizeMode={FastImage.resizeMode.center}
        />
      </View>
    </View>
  );
};

export default OnSale;
