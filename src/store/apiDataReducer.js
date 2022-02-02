const defaultState = {
   id: Date.now(),
   data: null
}

const ADD_API_DATA = 'ADD_API_DATA'

export const apiDataReducer = (state = defaultState, action) => {
   switch (action.type) {
      case ADD_API_DATA:
         return { ...state, data: state.data = action.payload }
      default:
         return state;
   }
}

export const addApiDataAction = (payload) => ({type: ADD_API_DATA, payload})