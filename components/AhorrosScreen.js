import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const AhorrosScreen = ({ navigation }) => {
  const [ahorro, setAhorro] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ahorros</Text>
      <Text style={styles.counter}>Total Ahorrado: ${ahorro}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={() => setAhorro(ahorro + 10)}>
          <FontAwesome name="plus-circle" size={40} color="#28a745" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.iconButton} onPress={() => setAhorro(0)}>
          <FontAwesome name="refresh" size={40} color="#dc3545" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AhorrosScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  counter: {
    fontSize: 22,
    color: '#007bff',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  iconButton: {
    padding: 10,
    borderRadius: 10,
  },
});
