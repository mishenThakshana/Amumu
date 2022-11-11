import {FlatList, SafeAreaView} from 'react-native';
import {ScreenTitle, SectionHeading} from 'src/components/global';
import {DebitCard, Transaction} from 'src/components/cards';

//Cars images
import Camaro from 'src/assets/images/cars/camaro.png';
import BMW from 'src/assets/images/cars/bmw.png';
import AUDI from 'src/assets/images/cars/audi.png';
import MCLAREN from 'src/assets/images/cars/mclaren.png';
import BMW3 from 'src/assets/images/cars/bmw3.png';
import FERARI from 'src/assets/images/cars/ferari.png';

const Wallet = () => {
  const transactions = [
    {
      name: 'BMW M5 Series',
      image: Camaro,
      price: '155,000',
      date: 'Dec 15,2022',
    },
    {
      name: 'BMW V8',
      image: BMW,
      price: '255,000',
      date: 'Nov 10,2022',
    },
    {
      name: 'Audi Sports',
      image: AUDI,
      price: '300,000',
      date: 'Aug 8,2022',
    },
    {
      name: 'McLaren Supercar',
      image: MCLAREN,
      price: '200,000',
      date: 'Nov 8,2022',
    },
    {
      name: 'BMW 3 Series',
      image: BMW3,
      price: '150,000',
      date: 'Aug 15,2022',
    },
    {
      name: 'Ferrari Sports',
      image: FERARI,
      price: '200,000',
      condition: 'Used',
      date: 'Feb 9,2022',
    },
  ];

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScreenTitle icon="ios-car-sport-outline" title="My Wallet" />
      <DebitCard name="Mishen Thakshana" endOfCard={3649} amount="255,500" />
      <SectionHeading title="Transaction History" />

      <FlatList
        contentContainerStyle={{justifyContent: 'center'}}
        data={transactions}
        renderItem={({item}) => (
          <Transaction
            name={item.name}
            image={item.image}
            price={item.price}
            date={item.date}
          />
        )}
        keyExtractor={(item, index) => String(index)}
        onEndReachedThreshold={0}
      />
    </SafeAreaView>
  );
};

export default Wallet;
