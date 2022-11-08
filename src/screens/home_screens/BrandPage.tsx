import {FC} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {SingleTopbar} from 'src/components/global';
import {Car} from 'src/components/cards';
import {colors} from 'src/constants';

interface BrandPageInterface {
  route: any;
  navigation: any;
}

//Cars images
import MERCEDES_1 from 'src/assets/images/cars/mercedes_1.png';
import MERCEDES_2 from 'src/assets/images/cars/mercedez_2.png';
import MERCEDES_3 from 'src/assets/images/cars/merdes_3.png';
import MERCEDES_4 from 'src/assets/images/cars/mercedes_4.png';
import MERCEDES_5 from 'src/assets/images/cars/mercedes_5.png';
import MERCEDES_6 from 'src/assets/images/cars/mercedes_6.png';

const BrandPage: FC<BrandPageInterface> = ({route, navigation}) => {
  const {title} = route.params;
  const cars = [
    {
      name: 'Benz Revo',
      image: MERCEDES_1,
      price: '145,000',
      condition: 'New',
      ratings: 4.5,
    },
    {
      name: 'Red V1',
      image: MERCEDES_2,
      price: '244,000',
      condition: 'Used',
      ratings: 2.1,
    },
    {
      name: 'Blue Knight',
      image: MERCEDES_3,
      price: '120,000',
      condition: 'Used',
      ratings: 4.0,
    },
    {
      name: 'Mercedez Relvo',
      image: MERCEDES_4,
      price: '200,000',
      condition: 'Used',
      ratings: 3.7,
    },
    {
      name: 'BMW 3 Series',
      image: MERCEDES_4,
      price: '150,000',
      condition: 'New',
      ratings: 4.2,
    },
    {
      name: 'Mercedes Classic',
      image: MERCEDES_5,
      price: '200,000',
      condition: 'Used',
      ratings: 4.1,
    },
  ];
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.accent}}>
      <SingleTopbar title={title} navigation={navigation} />
      <FlatList
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
        data={cars}
        renderItem={({item}) => (
          <Car
            name={item.name}
            image={item.image}
            price={item.price}
            condition={item.condition}
            ratings={item.ratings}
          />
        )}
        keyExtractor={(item, index) => String(index)}
        onEndReachedThreshold={0}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

export default BrandPage;
