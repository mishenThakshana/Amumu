import {FC} from 'react';
import {View, Text} from 'react-native';
import {colors} from 'src/constants';
import FastImage from 'react-native-fast-image';
import Ionicon from 'react-native-vector-icons/Ionicons';

interface CarInterface {
  image: any;
  name: string;
  ratings: number;
  condition: string;
  price: string;
}

const Car: FC<CarInterface> = ({name, ratings, image, price, condition}) => {
  return (
    <View style={{marginHorizontal: 20, marginVertical: 10}}>
      <View
        style={{
          padding: 10,
          backgroundColor: colors.secondary,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{alignSelf: 'flex-end'}}>
          <Ionicon name="ios-heart-outline" size={22} color={colors.primary} />
        </View>
        <View>
          <FastImage
            style={{width: 150, height: 120}}
            source={image}
            resizeMode={FastImage.resizeMode.center}
          />
        </View>
      </View>
      <View>
        <Text
          style={{
            color: colors.primary,
            marginVertical: 8,
            fontFamily: 'UberBold',
            fontSize: 16,
          }}>
          {name}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View>
            <Ionicon
              name="ios-star-half-sharp"
              color={colors.primary}
              size={22}
            />
          </View>
          <View style={{marginHorizontal: 5}}>
            <Text style={{color: '#A9A9A9', fontFamily: 'UberBold'}}>
              {ratings}
            </Text>
          </View>
          <View
            style={{
              height: '100%',
              width: 1,
              backgroundColor: '#A9A9A9',
              marginHorizontal: 5,
            }}
          />
          <View
            style={{
              backgroundColor: colors.secondary,
              paddingVertical: 5,
              borderRadius: 5,
              paddingHorizontal: 8,
              marginHorizontal: 5,
              alignItems: 'center',
            }}>
            <Text style={{color: colors.primary, fontFamily: 'UberMedium'}}>
              {condition}
            </Text>
          </View>
        </View>
        <View style={{marginVertical: 5}}>
          <Text
            style={{
              fontFamily: 'UberBold',
              color: colors.primary,
              fontSize: 16,
            }}>
            {`$${price}`}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Car;
