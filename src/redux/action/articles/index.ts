import {API} from '../../../utils';
import {ADD_ARTICLES} from '../../constant';

export const getArticles = () => async (dispatch: any) => {
  try {
    const response: any = await API.get('Testing/Article');
    dispatch({type: ADD_ARTICLES, data: response.data.articles});
  } catch (error) {
    console.log(error);
  }
};
