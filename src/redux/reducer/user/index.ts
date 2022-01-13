import {ADD_USER} from '../../constant';

interface dataType {
  type: string;
  data: {name: string; email: string; password: string};
}

const initialState = {
  users: [],
};

const userReducer = (state = initialState, action: dataType) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.data],
      };
    default:
      return state;
  }
};

export default userReducer;
