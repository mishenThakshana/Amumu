import {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {colors} from 'src/constants';

interface IconBtnInterface {
  icon: string;
  handler?: () => void;
}

const IconBtn: FC<IconBtnInterface> = ({icon, handler}) => {
  return (
    <TouchableOpacity onPress={handler} style={{marginHorizontal: 10}}>
      <Ionicon name={icon} size={25} color={colors.primary} />
    </TouchableOpacity>
  );
};

export default IconBtn;
