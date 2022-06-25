import React from 'react';
import {StyleSheet, View, Text, Platform} from 'react-native';

const Card = props => {
    return (
        <View style={styles.card}>
            <View style={styles.imageContainer}>

            </View>
            <View style={styles.titleContainer}>
                <Text>Dummy Title</Text>
            </View>
            <View style={styles.description}>
                <Text>This is a dummy description</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
   card: {
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    elevation: 5,
    height: 300,
    margin: 20
   },
   imageContainer: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden'
   },
   titleContainer: {
    height: '10%',
    paddingHorizontal: 15,
    fontWeight: 'bold'
   },
   description: {
    paddingHorizontal: 15
   } 
});

export default Card;