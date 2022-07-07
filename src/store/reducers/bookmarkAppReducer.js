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
  getfolders: [{}],
  // children: [{}],
  showAlert: false,
  title: "",
  message: "",
  type: "",
  openfolder: false,
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
        // action.payload.parent?
        ...state,
        loading: false,
        createfolder: action.payload,
        getfolders: [...state.getfolders, action.payload],
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
        openfolder: false,
      };
    case types.GET_FOLDERS_API_SUCCESS:
      return {
        ...state,
        loading: false,
        //getfolders: [...state.getfolders, action.payload],
        getfolders: action.payload,
      };
    case types.GET_FOLDERS_API_SUCCESS1:
      state.getfolders.map((i) => {
        if (i.id === action.payload2) {
          i.children = action.payload1;
          state.openfolder = true;

          return {
            ...state,
            loading: false,
            openfolder: true,
          };
        }
      });
    // return {
    //   ...state,
    //   loading: false,
    //   //getfolders: [...state.getfolders, action.payload],

    //   getfolders: action.payload1,
    //   currentChildrens: action.payload1,
    //   openfolder: true,
    // };

    // [...state.getfolders].map((i)=>{if(i.id===action.payload.pid){
    // [...state.getfolders].map((i) => {
    //   if (i.id === action.payload2) {
    //     i.children = action.payload1;
    //     return {
    //       ...state,
    //       loading: false,
    //     };
    //   }
    // }

    // );

    // i.children=action.payload;

    // return {

    // ...state,
    // loading: false,
    // //getfolders: [...state.getfolders, action.payload],
    // // getfolders: [{ ...state.getfolders, children: [action.payload] }],
    // getfolders:[{}] action.payload,
    // };
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
    case types.GET_RENAME_API:
      return {
        ...state,
        loading: true,
      };
    case types.GET_RENAME_API_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.GET_RENAME_API_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case types.OPEN_FOLDER_ACTION:
      return {
        ...state,
        openfolder: action.payload,
      };

    default:
      return state;
  }
};
export default bookmarkAppReducer;
