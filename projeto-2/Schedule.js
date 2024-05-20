import { Image, StyleSheet } from 'react-native';

const Schedule = () => {
  return (
    <>
      <Image source={require('./horario2.jpg')} style={styles.image} />
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 1300,
    height: 650,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 75,
  },
});

export default Schedule;