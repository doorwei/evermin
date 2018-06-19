const categories = (state = [], action) => {
  switch(action.type) {
    case 'ADD_CATEGORY':
      return [
        ...state,
        action.newCategory,
      ]
    default:
      return state
  }
}

export default categories
