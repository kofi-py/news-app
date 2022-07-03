import React from 'react';
import {StyleSheet, View, Text, Platform, TouchableOpacity} from 'react-native';
import Card from '../components/Card';

const NewsListScreen = props => {
    console.log(props);
    return (
        <View>
          <Card navigation={props.navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
});

export default NewsListScreen;