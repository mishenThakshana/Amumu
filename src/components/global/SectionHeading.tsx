import {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from 'src/styles/Global.style';

interface SectionHeadingInterface {
  title: string;
  handler?: () => void;
}

const SectionHeading: FC<SectionHeadingInterface> = ({title, handler}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 10,
      }}>
      <View>
        <Text style={styles.sectionTitle}>{title}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={handler}>
          <Text style={styles.sectionLink}>See All</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SectionHeading;
