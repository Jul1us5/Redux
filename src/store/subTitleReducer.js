const defaultState = {
   id: Date.now(),
   subTitle: 'Redux state management'
}

const ADD_SUB_TITLE = 'ADD_SUB_TITLE'

export const subTitleReducer = (state = defaultState, action) => {
   switch (action.type) {
      case ADD_SUB_TITLE:
         return { ...state, subTitle: state.subTitle = action.payload }
      default:
         return state;
   }
}

export const addSubTitleAction = (payload) => ({type: ADD_SUB_TITLE, payload})