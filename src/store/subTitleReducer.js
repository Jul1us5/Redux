const defaultState = {
   subTitle: 'Redux state management'
}

export const subTitleReducer = (state = defaultState, action) => {
   switch (action.type) {
      case "ADD_SUB_TITLE":
         return { ...state, subTitle: state.subTitle = action.payload }
      default:
         return state;
   }
}