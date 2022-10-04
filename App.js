import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function ArtInstitute({}) {
  return (
    <View styles={styles.container}>
      <Image style={styles.imgSettings} source={require('./assets/art.png')} />
    </View>
  );
}

function MagnificentMile({ }) {
  return (
    <View styles={styles.container}>
      <Image style={styles.imgSettings} source={require('./assets/mile.png')} />
    </View>
  );
}

function NavyPier({ }) {
  return (
    <View style={styles.container}>
      <Image style={styles.imgSettings} source={require('./assets/pier.png')} />
    </View>
  );
}
function WaterTower({ }) {
  return (
    <View styles={styles.container}>
      <Image style={styles.imgSettings} source={require('./assets/water.png')} />
    </View>
  );
}
function WillisTower({ }) {
  return (
    <View styles={styles.container}>
      <Image style={styles.imgSettings} source={require('./assets/willis.png')} />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Art Institute of Chicago">
        <Drawer.Screen name="Art Institute of Chicago" component={ArtInstitute} />
        <Drawer.Screen name="Magnificent Mile" component={MagnificentMile} />
        <Drawer.Screen name="Navy Pier" component={NavyPier} />
        <Drawer.Screen name="Water Tower" component={WaterTower} />
        <Drawer.Screen name="Willis Tower" component={WillisTower} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgSettings: {
    width: 320,
    height: 480,
  }
});
