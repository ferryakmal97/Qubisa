import {ADD_CATEGORIES} from '../../constant';

interface dataType {
  data: {
    id: number;
    name: string;
  }[];
  type: string;
}

const initialState = {
  categories: <any[]>[],
};

const categoriesReducer = (state = initialState, action: dataType) => {
  switch (action.type) {
    case ADD_CATEGORIES:
      return {
        ...state,
        categories: action.data,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
