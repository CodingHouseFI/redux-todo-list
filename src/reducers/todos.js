export default function todos(state = ['test 1', 'test 2'], action) {
  switch(action.type) {
    case 'CREATE_TODO':
      return state.concat(action.payload.todo);
      break;
    default:
      return state;
  }
}
