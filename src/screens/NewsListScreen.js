import React, {useEffect} from 'react';
import {StyleSheet, View, Text, Platform, TouchableOpacity} from 'react-native';
import Card from '../components/Card';
import { useSelector, useDispatch } from 'react-redux';
import * as newsAction from '../redux/actions/newsAction'

const NewsListScreen = props => {
    const dispatch  = useDispatch();
    useEffect(() => {
      dispatch(newsAction.fetchArticles())
    }, [dispatch]);
    const articles = useSelector(state => state.news.articles);
    console.log(articles)
    return (
        <View>
          <Card navigation={props.navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
});

export default NewsListScreen;
