import {FC} from 'react';
import {ScrollView, SafeAreaView} from 'react-native';
import {SingleTopbar} from 'src/components/global';
import {OnSale} from 'src/components/cards';
import {colors} from 'src/constants';

interface SpecialOffersInterface {
  navigation: any;
}

//Cars images
import CAMARO from 'src/assets/images/cars/camaro.png';
import BMW from 'src/assets/images/cars/bmw.png';
import MCLAREN from 'src/assets/images/cars/mclaren.png';
import BMW3 from 'src/assets/images/cars/bmw3.png';
import FERARI from 'src/assets/images/cars/ferari.png';

const SpecialOffers: FC<SpecialOffersInterface> = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.accent}}>
      <SingleTopbar title="Special Offers" navigation={navigation} />
      <ScrollView>
        <OnSale
          percentage="30%"
          title="Hot Deals!"
          description={`Get a new car discount, ${'\n'}only valid till this week`}
          image={FERARI}
        />
        <OnSale
          percentage="10%"
          title="Monthly Deals!"
          description={`Get a new car discount, ${'\n'}only valid till this month`}
          image={BMW3}
        />
        <OnSale
          percentage="40%"
          title="Weekly Deals!"
          description={`Get a new car discount, ${'\n'}only valid till this week`}
          image={CAMARO}
        />
        <OnSale
          percentage="30%"
          title="Weekly Deals!"
          description={`Get a new car discount, ${'\n'}only valid till this week`}
          image={BMW}
        />
        <OnSale
          percentage="20%"
          title="Weekly Deals!"
          description={`Get a new car discount, ${'\n'}only valid till this week`}
          image={MCLAREN}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SpecialOffers;
