import {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {colors} from 'src/constants';
import Ionicon from 'react-native-vector-icons/Ionicons';

interface TransactionInterface {
  name: string;
  image: any;
  price: string;
  date: string;
}

const Transaction: FC<TransactionInterface> = ({image, name, price, date}) => {
  return (
    <View
      style={{
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            backgroundColor: colors.secondary,
            padding: 10,
            borderRadius: 40,
            alignItems: 'center',
          }}>
          <FastImage
            style={{width: 60, height: 60}}
            source={image}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
        <View
          style={{
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            marginLeft: 10,
          }}>
          <View>
            <Text
              style={{
                color: colors.primary,
                fontWeight: 'bold',
                fontSize: 18,
                fontFamily: 'UberBold',
              }}>
              {name}
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: colors.darkGray,
                fontSize: 15,
              }}>
              {date}
            </Text>
          </View>
        </View>
      </View>

      <View>
        <View>
          <Text
            style={{
              color: colors.primary,
              fontWeight: 'bold',
              fontSize: 15,
              fontFamily: 'UberBold',
            }}>
            {`LKR ${price}`}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: colors.primary,
            padding: 8,
            borderRadius: 10,
            marginTop: 2,
          }}>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Ionicon name="ios-eye-outline" color={colors.accent} size={20} />
              <Text style={{fontFamily: 'UberMedium', color: colors.accent}}>
                {' '}
                View
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Transaction;
