import {API} from '../../../utils';
import {ADD_CATEGORIES} from '../../constant';

export const getCategories = () => async (dispatch: any) => {
  try {
    const response: any = await API.get('Testing/article/category');
    dispatch({type: ADD_CATEGORIES, data: response.data.categories});
  } catch (error) {
    console.log(error);
  }
};
