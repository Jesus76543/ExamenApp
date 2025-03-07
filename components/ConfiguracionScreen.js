import React from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ConfiguracionScreen = () => {
  const showAlert = (msg) => {
    Alert.alert('Configuración', msg);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuraciones</Text>

      <TouchableOpacity style={styles.option} onPress={() => showAlert('Cambiando tema')}>
        <FontAwesome name="adjust" size={24} color="#007bff" />
        <Text style={styles.optionText}>Cambiar Tema</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => showAlert('Cambiando idioma')}>
        <FontAwesome name="globe" size={24} color="#007bff" />
        <Text style={styles.optionText}>Cambiar Idioma</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => showAlert('Activando notificaciones')}>
        <FontAwesome name="bell" size={24} color="#007bff" />
        <Text style={styles.optionText}>Notificaciones</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ConfiguracionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    width: '80%',
    marginVertical: 10,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  optionText: {
    fontSize: 18,
    marginLeft: 10,
    color: '#333',
  },
});
