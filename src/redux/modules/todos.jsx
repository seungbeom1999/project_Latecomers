const ADD_TODO = "modules/ADD_TODO";
const DELETE_TODO = "modules/DELETE_TODO";
const SWITCH_TODO = "modules/SWITCH_TODO";

export const addTodo = (list) => ({
  type: ADD_TODO,
  payload: list,
});
export const deleteTodo = (list) => ({
  type: DELETE_TODO,
  payload: list,
});
export const switchTodo = (list) => ({
  type: SWITCH_TODO,
  payload: list,
});
const initialState = [
  {
    id: crypto.randomUUID(),
    title: "리덕스 공부하기",
    detail: "팀과제 완수하기!",
    isDone: false,
  },
];
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter((item) => item.id !== action.payload);
    case SWITCH_TODO:
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });
    default:
      return state;
  }
};

export default todos;
