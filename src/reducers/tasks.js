const tasks = (state = [ {name: 'item1', category: 'work', startTime: 2342, endTime: 2342}, {name: 'item2', category: 'play', startTime: 2342, endTime: 2342}, {name: 'item3', category: 'work', startTime: 2342, endTime: 2342}], action) => {
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
