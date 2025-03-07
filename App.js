import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import ConfiguracionScreen from './components/ConfiguracionScreen';
import PerfilScreen from './components/PerfilScreen';
import AhorrosScreen from './components/AhorrosScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={HomeScreen} />
        <Stack.Screen name="Configuración" component={ConfiguracionScreen} />
        <Stack.Screen name="Perfil" component={PerfilScreen} />
        <Stack.Screen name="Ahorros" component={AhorrosScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
