const categories = (state = ['work', 'play', 'sleep'], action) => {
  switch(action.type) {
    case 'ADD_NEW_CATEGORY':
      return [
        ...state,
        action.newCategory,
      ]
    case 'REMOVE_CATEGORY':
      return state.filter((comparable) => comparable !== action.category);
    default:
      return state
  }
}

export default categories
