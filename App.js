import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Index from "./Components/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <Index/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edf0f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
