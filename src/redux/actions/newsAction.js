import { ActionSheetIOS } from "react-native";

export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const TOGGLE_FAVORITES = 'TOGGLE_FAVORITES';

export const fetchArticles = () => {
    return async dispatch => {
        
        const response = await fetch('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=d395acb787284c38ab1374896406450c')

        const responseData = await response.json()

        dispatch({
            type: FETCH_ARTICLES,
            payload: responseData.articles
        });
    }
}

export const toggleFavorites = url => {
    return {
       type: TOGGLE_FAVORITES,
       payload: url
    }
}
