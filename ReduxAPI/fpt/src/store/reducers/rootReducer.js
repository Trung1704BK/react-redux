const initState = {
  users: [
    { id: 1, name: 'A' },
    { id: 2, name: 'B' },
  ],
  posts: [],
};
//

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'DELETE_USER':
      console.log('run into delete users', action);
      console.log('test', state);
      let users = state.users;

      users = users.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        users,
      };

    default:
      return state;
  }
};
//

export { rootReducer};
