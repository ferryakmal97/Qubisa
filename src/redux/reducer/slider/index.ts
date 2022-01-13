import {ADD_SLIDER} from '../../constant';

interface dataType {
  data: {
    title: string;
    imageURL: {
      mobile: string;
    };
    sort: string;
  }[];
  type: string;
}

const initialState = {
  slider: <any[]>[],
};

const sliderReducer = (state = initialState, action: dataType) => {
  switch (action.type) {
    case ADD_SLIDER:
      return {
        ...state,
        slider: action.data,
      };
    default:
      return state;
  }
};

export default sliderReducer;
