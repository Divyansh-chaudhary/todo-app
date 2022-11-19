type TaskCompleted = boolean;
type TaskText = string;
type TaskID = string;
type TaskCompleteFunc = Function;
type TaskDelete = Function;

type Task = {
  id: TaskID;
  completed: TaskCompleted;
  text: TaskText;
};
