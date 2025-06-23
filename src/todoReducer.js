/*
todo: {
id: 23234324,
description: "Aprender php"
done: true / falseF
}
*/

export const todoReducer = (initialState, action) => {
  switch (action.type) {
    case "Add Todo":
      return [...initialState, action.payload];
    case "Delete Todo":
      return initialState.filter((todo) => todo.id !== action.payload);
    case "Complete Todo":
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done, // manipula un boleano,
          };
        }
        return todo;
      });
    case "Update Todo":
      return initialState.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            description: action.payload.description,
          };
        }
        return todo;
      });

    default:
      return initialState;
  }
};
