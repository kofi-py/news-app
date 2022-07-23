import React, {useEffect} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
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
      <FlatList 
        data={articles} 
        keyExtractor={item => item.url} 
        renderItem={({item}) => (
          <Card 
            navigation={props.navigation}
            title={item.title}
            description={item.description} 
            image={item.urlToImage}
            url={item.url}
          />
        )}
      />
        // <View>
        //   <Card navigation={props.navigation} />
        // </View>
    );
}

const styles = StyleSheet.create({
});

export default NewsListScreen;
