import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';

const Menu = ({ navigation }) => {
  const openDriveLink = () => {
    const url = 'https://drive.google.com/drive/folders/1eehh_pW_DEconwf-tU1jjPsR_kKgAGeY?usp=sharing';
    Linking.openURL(url).catch((err) => console.error('Failed to open URL:', err));
  };

  return (
    <View style={styles.container}>
      <Image source={require('./school-logo.png')} style={styles.logo} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Subjects')}>
        <Text style={styles.buttonText}>PRESENÇA</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Schedule')}>
        <Text style={styles.buttonText}>HORÁRIO</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={openDriveLink}>
        <Text style={styles.buttonText}>DRIVE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  logo: {
    width: 500,
    height: 300,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 50,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#483D8B',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 10,
    width: '70%',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Menu;
