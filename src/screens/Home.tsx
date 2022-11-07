import {FC} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {
  Searchbar,
  SectionHeading,
  BrandRow,
  Brand,
  Deal,
} from 'src/components/global';
import {OnSale} from 'src/components/cards';
import styles from 'src/styles/Global.style';
//Brands
import MERCEDES from 'src/assets/images/brands/mercedes.png';
import TESLA from 'src/assets/images/brands/tesla.png';
import BMW from 'src/assets/images/brands/bmw.png';
import TOYOTA from 'src/assets/images/brands/toyota.png';
import VOLVO from 'src/assets/images/brands/volvo.png';
import BUGATTI from 'src/assets/images/brands/bugatti.png';
import HONDA from 'src/assets/images/brands/honda.png';
import MORE from 'src/assets/images/brands/more.png';
import {routes} from 'src/constants';

interface HomeInterface {
  navigation: any;
}

const Home: FC<HomeInterface> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScrollView>
        <Searchbar />
        <SectionHeading title="Special Offers" />
        <OnSale />
        <BrandRow>
          <Brand brand={MERCEDES} label="Mercedes" />
          <Brand brand={TESLA} label="Tesla" />
          <Brand brand={BMW} label="BMW" />
          <Brand brand={TOYOTA} label="Toyota" />
        </BrandRow>
        <BrandRow>
          <Brand brand={VOLVO} label="Volvo" />
          <Brand brand={BUGATTI} label="Bugatti" />
          <Brand brand={HONDA} label="Honda" />
          <Brand brand={MORE} label="More" />
        </BrandRow>
        <SectionHeading
          handler={() => navigation.navigate(routes.TOP_DEALS)}
          title="Top Deals"
        />
        <ScrollView
          style={{marginHorizontal: 15, marginVertical: 10}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <Deal label="All" active={true} />
          <Deal label="Mercedes" />
          <Deal label="Tesla" />
          <Deal label="BMW" />
          <Deal label="Toyota" />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
