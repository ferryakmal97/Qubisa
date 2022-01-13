import {combineReducers} from 'redux';
import userReducer from './user';
import sliderReducer from './slider';
import contentReducer from './content';
import categoriesReducer from './categories';
import articlesReducer from './articles';

const reducer = combineReducers({
  userReducer,
  sliderReducer,
  contentReducer,
  categoriesReducer,
  articlesReducer,
});

export type RootState = ReturnType<typeof reducer>;
export default reducer;
