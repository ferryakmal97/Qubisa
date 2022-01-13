import {ADD_CONTENT} from '../../constant';

const initialState = {
  microLearning: <any[]>[],
  kursus: <any[]>[],
};

const contentReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_CONTENT:
      return {
        ...state,
        microLearning: action.data.microLearning,
        kursus: action.data.kursus,
      };
    default:
      return state;
  }
};

export default contentReducer;
