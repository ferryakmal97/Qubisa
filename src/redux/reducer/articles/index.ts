import {ADD_ARTICLES} from '../../constant';

const initialState = {
  articles: <any[]>[],
};

const articlesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_ARTICLES:
      return {
        ...state,
        articles: action.data,
      };
    default:
      return state;
  }
};

export default articlesReducer;
