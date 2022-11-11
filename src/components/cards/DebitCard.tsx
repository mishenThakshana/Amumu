import {FC} from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {colors} from 'src/constants';
import Ionicon from 'react-native-vector-icons/Ionicons';
//Images
import VisaCardBG from 'src/assets/images/visa_card_bg.jpg';
import VisaMaster from 'src/assets/images/visa-master.png';

interface DebitCardInterface {
  name: string;
  endOfCard: number;
  amount: string;
}

const DebitCard: FC<DebitCardInterface> = ({name, endOfCard, amount}) => {
  return (
    <View style={{alignItems: 'center', marginVertical: 10}}>
      <ImageBackground
        style={{width: 350, height: 200}}
        imageStyle={{borderRadius: 20}}
        source={VisaCardBG}
        resizeMode="cover">
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{margin: 20}}>
            <View>
              <Text
                style={{
                  color: colors.accent,
                  fontFamily: 'UberBold',
                  fontSize: 16,
                }}>
                {name}
              </Text>
            </View>
            <View style={{marginTop: 5}}>
              <Text
                style={{
                  color: colors.accent,
                  fontFamily: 'UberBold',
                  fontSize: 12,
                }}>
                {`⬤ ⬤ ⬤ ⬤   ⬤ ⬤ ⬤ ⬤   ⬤ ⬤ ⬤ ⬤   ${endOfCard}`}
              </Text>
            </View>
          </View>
          <View>
            <FastImage
              source={VisaMaster}
              style={{width: 120, height: 100}}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
        </View>
        <View style={{marginHorizontal: 20}}>
          <View>
            <Text
              style={{
                color: colors.accent,
                fontFamily: 'UberBold',
                fontSize: 18,
              }}>
              Your balance
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text
                style={{
                  color: colors.accent,
                  fontFamily: 'UberBold',
                  fontSize: 30,
                }}>
                LKR {amount}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: colors.accent,
                padding: 10,
                borderRadius: 20,
              }}>
              <TouchableOpacity>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Ionicon
                    name="ios-download-outline"
                    color={colors.primary}
                    size={20}
                  />
                  <Text
                    style={{fontFamily: 'UberMedium', color: colors.primary}}>
                    {' '}
                    Top Up
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default DebitCard;
