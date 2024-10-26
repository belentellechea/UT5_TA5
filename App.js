
import { StyleSheet, Text, View, SafeAreaView, Image, FlatList } from 'react-native';

const images = [
  { src: require('./assets/imagen1.jpg'), description: 'selfie con la banda' },
  { src: require('./assets/imagen2.jpg'), description: 'perrito loco' },
  { src: require('./assets/imagen3.jpg'), description: 'horse side eye' },
  { src: require('./assets/imagen4.jpg'), description: 'entrevista a animalito' },
  { src: require('./assets/imagen5.jpg'), description: 'ardilla gordinflona' },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Galería de imágenes</Text>
      <View style={styles.album}>
        <FlatList 
          data={images}
          renderItem = {( {item} ) => (
            <View style={styles.imageContainer}>
              <Image source={item.src} style={styles.image}/>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0F3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40, 
    fontFamily: "Times New Roman",
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 10
  }, 
  imageContainer: {
    borderWidth: 2, 
    borderColor: "#FFB3C1",
    gap: 25,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    margin: 10
  }, 
  image: {
    width: 200,
    height: 200,
    borderRadius: 10
  }, 
  description: {
    fontFamily: "Times New Roman",
    alignSelf: "center",
    fontSize: 18,
    marginBottom: 15
  }, 
  album: {
    flex: 1
  }
});
