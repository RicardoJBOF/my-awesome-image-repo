export const SET_USERS = "SET_USERS";
export const SET_PICTURES = "SET_PICTURES";

const dataReducer = (state, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.users,
        loading: false,
      };
    
    case SET_PICTURES:
    return {
      ...state,
      pictures: action.pictures,
      loading: false,
    };    

    default:
      return state;

  }
};

export default dataReducer;
