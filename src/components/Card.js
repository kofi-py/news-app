import React from 'react';
import {StyleSheet, View, Text, Platform, Image, TouchableOpacity} from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

const Card = props => {
    return (
        <TouchableOpacity onPress={() => props.navigation.navigate('NewsItem')}>
            <View style={styles.card}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../../assets/news-demo.jpg')} />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Dummy Title</Text>
                    <MaterialIcons name="favorite" size={24} color="#58c4dd" />
                </View>
                <View style={styles.description}>
                    <Text style={styles.descriptionText}>This is a dummy description</Text>
                </View>
            </View>
        </TouchableOpacity>
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
   image: {
    width: '100%',
    height: '100%'
   },
   titleContainer: {
    height: '10%',
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
   },
   titleText: {
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 20
   },
   description: {
    paddingHorizontal: 15
   },
   descriptionText: {
    marginTop: 10,
    fontSize: 15
   } 
});

export default Card;