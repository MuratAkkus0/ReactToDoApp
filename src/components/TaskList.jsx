import "../assets/styles/taskList.css";
import TaskItem from "./TaskItem";
function TaskList({ children }) {
  return (
    <>
      <div className="app__list--area">
        <ul className="app__list--list">{children}</ul>
      </div>
    </>
  );
}

export default TaskList;
