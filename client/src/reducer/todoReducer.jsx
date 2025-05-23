// ---------- 2. Todo Reducer ----------
const todoReducer = (state, action) => {
    switch (action.type) {
      case 'ADD':
        return [...state, { id: Date.now(), text: action.text }];
      case 'REMOVE':
        return state.filter(todo => todo.id !== action.id);
      default:
        return state;
    }
  };

  export default todoReducer