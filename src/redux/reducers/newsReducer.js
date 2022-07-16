import { FETCH_ARTICLES } from "../actions/newsAction";

const initialState = {
    articles: [],
    favorites: []
}

var newsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ARTICLES:
            return {
                ...states,
                articles: action.payload
            }
    }
    return state;
}

export default newsReducer;
