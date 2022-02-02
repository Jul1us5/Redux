const defaultState = {
   id: Date.now(),
   title: 'WEBPACK.Bundle 2.0',
}

const ADD_TITLE = 'ADD_TITLE'

export const titleReducer = (state = defaultState, action) => {
   switch (action.type) {
      case ADD_TITLE:
         return { ...state, title: state.title = action.payload }
      default:
         return state;
   }
}

export const addTitleAction = (payload) => ({type: ADD_TITLE, payload})