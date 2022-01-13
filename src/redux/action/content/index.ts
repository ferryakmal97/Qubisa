import {API} from '../../../utils';
import {ADD_CONTENT} from '../../constant';

export const getContents = () => async (dispatch: any) => {
  try {
    const response: any = await API.get('Testing/content');
    let mLearn = Array();
    let kursus = Array();
    for (const data of response.data.contents) {
      if (data.isMicrolearning) {
        mLearn.push(data);
      } else {
        kursus.push(data);
      }
    }
    dispatch({
      type: ADD_CONTENT,
      data: {microLearning: mLearn, kursus: kursus},
    });
  } catch (error) {
    console.log(error);
  }
};
