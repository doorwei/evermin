const tasks = (state = [], action) => {
  switch(action.type) {
    case 'ADD_NEW_TASK':
      return [
        ...state,
        action.newTask,
      ]
    case 'REMOVE_TASK':
      return state.filter((comparable) => comparable !== action.task);
    default:
      return state
  }
}

export default tasks;
