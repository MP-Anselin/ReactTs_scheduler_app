export const addTask = (state: any, action: { payload: any }) => {
  return {
    ...state,
    task: action.payload,
  };
};
