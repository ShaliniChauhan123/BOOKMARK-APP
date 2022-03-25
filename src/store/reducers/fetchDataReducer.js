import { types } from "../actionTypes";
const initialState = {
  loading: false,
  name:"",
  loginEmailid: "",
  loginPassword:"",
  user:"",
  error: {},
};

const fetchDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.HANDLE:
        return {
          ...state,
          name: action.payload,
        };
    case types.HANDLE1:
      return {
        ...state,
        loginEmailid: action.payload,
      };
      case types.HANDLE2:
      return {
        ...state,
        loginPassword: action.payload,
      };
    case types.LOGIN_DATA_SEND_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.LOGIN_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: {},
      };
    case types.LOGIN_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        user: {},
        error: action.error,
      };
      case types.REGISTER_DATA_SEND_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.REGISTER_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        //user: action.payload,
        error: {},
      };
    case types.REGISTER_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        //user: {},
        error: action.error,
      };
    default:
      return state;
  }
};
export default fetchDataReducer;
