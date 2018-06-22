const tasks = (state = [ {name: 'item1', category: 'work', startTime: 2342, endTime: 23320}, {name: 'item2', category: 'play', startTime: 2342, endTime: 43420}, {name: 'item3', category: 'work', startTime: 2342, endTime: 1234200}], action) => {
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
