import { MdAdd } from "react-icons/md";
import "../assets/styles/addTaskCard.css";

export default function AddTask(props) {
  const { newTask, onChangeTask, onClickAddBtn } = props;
  return (
    <>
      <div className="app__input--area">
        <div className="app__input--title">Add Task</div>
        <div className="app__input--container">
          <input
            value={newTask}
            onChange={onChangeTask}
            onKeyDown={(e) => (e.key === "Enter" ? onClickAddBtn() : true)}
            className="app__input"
            type="text"
            name="addTask"
            id="addTask"
            placeholder="Add a new task..."
          />
          <button id="addTaskBtn" onClick={onClickAddBtn}>
            <MdAdd />
          </button>
        </div>
      </div>
    </>
  );
}
