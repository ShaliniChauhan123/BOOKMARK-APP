import { types } from "../actionTypes";
const initialState = {
  loading: false,
  name: "",
  loginEmailid: "",
  loginPassword: "",
  user: "",
  foldername: "",
  error: {},
  authorised: false,
  getfolders: [],
  showAlert: false,
  title: "",
  message: "",
  type: "",
};

const bookmarkAppReducer = (state = initialState, action) => {
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
        showAlert: false,
        loading: true,
      };
    case types.LOGIN_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        name: action.payload.name,
        user: action.payload,
        error: {},
        authorised: true,
      };
    case types.LOGIN_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        user: {},
        error: action.error,
        showAlert: true,
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
        user: action.payload,
        error: {},
        authorised: true,
      };
    case types.REGISTER_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case types.HANDLEME_SEND_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.HANDLEME_SUCCESS:
      return {
        ...state,
        loading: false,
        name: action.payload,
        error: {},
      };
    case types.HANDLEME_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case types.CREATE_FOLDER_API_SEND_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_FOLDER_API_SUCCESS:
      return {
        ...state,
        loading: false,
        createfolder: action.payload,
      };
    case types.CREATE_FOLDER_API_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case types.GET_FOLDERS_API_SEND_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.GET_FOLDERS_API_SUCCESS:
      return {
        ...state,
        loading: false,
        getfolders: action.payload,
      };
    case types.GET_FOLDERS_API_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case types.SHOW_ALERT:
      return {
        ...state,
        loading: false,
        showAlert: true,
        message: action.message,
      };

    default:
      return state;
  }
};
export default bookmarkAppReducer;
