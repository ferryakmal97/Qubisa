import {API} from '../../../utils';
import {ADD_SLIDER} from '../../constant';

export const getSlider = () => async (dispatch: any) => {
  try {
    const response: any = await API.get('Testing/slide/v2');
    dispatch({type: ADD_SLIDER, data: response.data.mainimages});
  } catch (error) {
    console.log(error);
  }
};
