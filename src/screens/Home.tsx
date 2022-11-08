import {FC} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
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
//Cars
import BMWCAR from 'src/assets/images/cars/bmw.png';
import {routes} from 'src/constants';

interface HomeInterface {
  navigation: any;
}

const Home: FC<HomeInterface> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScrollView>
        <Searchbar />
        <SectionHeading
          handler={() => navigation.navigate(routes.SPECIAL_OFFERS)}
          title="Special Offers"
        />
        <View style={{marginBottom: 5}}>
          <OnSale
            percentage="20%"
            title="Week Deals!"
            description={`Get a new car discount, ${'\n'}only valid till this week`}
            image={BMWCAR}
          />
        </View>
        <BrandRow>
          <Brand
            handler={() =>
              navigation.navigate(routes.BRAND_PAGE, {
                title: 'Mercedes',
              })
            }
            brand={MERCEDES}
            label="Mercedes"
          />
          <Brand
            handler={() =>
              navigation.navigate(routes.BRAND_PAGE, {
                title: 'Tesla',
              })
            }
            brand={TESLA}
            label="Tesla"
          />
          <Brand
            handler={() =>
              navigation.navigate(routes.BRAND_PAGE, {
                title: 'BMW',
              })
            }
            brand={BMW}
            label="BMW"
          />
          <Brand
            handler={() =>
              navigation.navigate(routes.BRAND_PAGE, {
                title: 'Toyota',
              })
            }
            brand={TOYOTA}
            label="Toyota"
          />
        </BrandRow>
        <BrandRow>
          <Brand
            handler={() =>
              navigation.navigate(routes.BRAND_PAGE, {
                title: 'Volvo',
              })
            }
            brand={VOLVO}
            label="Volvo"
          />
          <Brand
            handler={() =>
              navigation.navigate(routes.BRAND_PAGE, {
                title: 'Bugatti',
              })
            }
            brand={BUGATTI}
            label="Bugatti"
          />
          <Brand
            handler={() =>
              navigation.navigate(routes.BRAND_PAGE, {
                title: 'Honda',
              })
            }
            brand={HONDA}
            label="Honda"
          />
          <Brand
            handler={() =>
              navigation.navigate(routes.BRAND_PAGE, {
                title: 'More',
              })
            }
            brand={MORE}
            label="More"
          />
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
