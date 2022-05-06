import React from 'react';
import {Button,View, Text} from 'react-native';
import styles from './styles';


function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home</Text>
            <Button 
                title="Ir a Menu"
                onPress={() => navigation.navigate('Menu')}
            />
        </View>
    );
}

export default HomeScreen;