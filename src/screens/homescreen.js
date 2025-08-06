import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import casual from "../../assets/casual_dog.png";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Inicial</Text>
      <Button
        title="Ir para a tela de Detalhes"
        onPress={() => navigation.navigate('Details')}
      />
      <Image>
        source={casual}
        style={}
      </Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomeScreen;