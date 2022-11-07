import {FC} from 'react';
import {View} from 'react-native';

interface BrandRowChildren {
  children: any;
}

const BrandRow: FC<BrandRowChildren> = ({children}) => {
  return (
    <View
      style={{
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      }}>
      {children}
    </View>
  );
};

export default BrandRow;
