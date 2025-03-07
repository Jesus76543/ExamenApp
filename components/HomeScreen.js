import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido</Text>
            <Text style={styles.subtitle}>Esta es la Página de Inicio</Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Configuración')}>
                <Text style={styles.buttonText}>Configuración</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Perfil')}>
                <Text style={styles.buttonText}>Perfil</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Ahorros')}>
                <Text style={styles.buttonText}>Ahorros</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3ab1ed',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: 2,
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        color: '#f0f0f0',
        textAlign: 'center',
        fontStyle: 'italic',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#0056b3',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 25,
        marginVertical: 10,
        width: '80%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
});

export default HomeScreen;
