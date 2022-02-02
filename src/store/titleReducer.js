const defaultState = {
   title: 'WEBPACK.Bundle 2.0',
}

export const titleReducer = (state = defaultState, action) => {
   switch (action.type) {
      case "ADD_TITLE":
         return { ...state, title: state.title = action.payload }
      default:
         return state;
   }
}