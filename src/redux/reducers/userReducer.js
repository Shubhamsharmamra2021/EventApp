const initialState = {
    token:'',
    showLoader:false,
  };
   
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER_TOKEN':
        return {
          ...state,
          token: action.payload
        };
       case 'CLEAR_USER_TOKEN':
        return {
           ...state,
           token:''
        }; 
        case 'SET_LOADER_STATE':
          return{
            ...state,
            showLoader: action.payload
          }
      default:
        return state;
    }
  };