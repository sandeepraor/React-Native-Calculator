import { Text } from 'react-native';
import styles from '../styles';
const Hello = ({ name }) => {
  return <Text style={styles.text_decor}>{`${name}`}</Text>;
};

export default Hello;
