function reducer(state, action) {
  switch (action.type) {
    default:
      return state
  }
}

const initialState = {
  todos: [
    {
      item: 'Learn about reducers',
      completed: false,
      id: 3892987589,
    },
    {
      item: 'Learn about React Context API',
      completed: false,
      id: 3892987535,
    },
  ],
}

export { reducer, initialState }
