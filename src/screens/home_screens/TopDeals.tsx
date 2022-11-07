import {FC} from 'react';
import {View, ScrollView, SafeAreaView, FlatList} from 'react-native';
import {SingleTopbar, Deal} from 'src/components/global';
import {Car} from 'src/components/cards';
import {colors} from 'src/constants';

interface TopDealsInterface {
  navigation: any;
}

//Cars images
import Camaro from 'src/assets/images/cars/camaro.png';
import BMW from 'src/assets/images/cars/bmw.png';
import AUDI from 'src/assets/images/cars/audi.png';
import MCLAREN from 'src/assets/images/cars/mclaren.png';
import BMW3 from 'src/assets/images/cars/bmw3.png';
import FERARI from 'src/assets/images/cars/ferari.png';

const TopDeals: FC<TopDealsInterface> = ({navigation}) => {
  const cars = [
    {
      name: 'Camaro Sports',
      image: Camaro,
      price: '155,000',
      condition: 'New',
      ratings: 4.5,
    },
    {
      name: 'BMW V8',
      image: BMW,
      price: '255,000',
      condition: 'New',
      ratings: 5.0,
    },
    {
      name: 'Audi Sports',
      image: AUDI,
      price: '300,000',
      condition: 'New',
      ratings: 4.7,
    },
    {
      name: 'McLaren Supercar',
      image: MCLAREN,
      price: '200,000',
      condition: 'Used',
      ratings: 3.7,
    },
    {
      name: 'BMW 3 Series',
      image: BMW3,
      price: '150,000',
      condition: 'New',
      ratings: 4.2,
    },
    {
      name: 'Ferrari Sports',
      image: FERARI,
      price: '200,000',
      condition: 'Used',
      ratings: 4.7,
    },
  ];
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.accent}}>
      <SingleTopbar title="Top Deals" navigation={navigation} />
      <View>
        <ScrollView
          style={{
            marginHorizontal: 15,
            marginVertical: 10,
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <Deal label="All" active={true} />
          <Deal label="Mercedes" />
          <Deal label="Tesla" />
          <Deal label="BMW" />
          <Deal label="Toyota" />
        </ScrollView>
      </View>
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

export default TopDeals;
