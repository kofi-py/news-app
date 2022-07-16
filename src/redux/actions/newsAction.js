export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const ADD_FAVORITES = 'ADD_FAVORITES';

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
