import PropTypes from "prop-types";
import { MdAdd } from "react-icons/md";
import "../assets/styles/addTaskCard.css";

AddTask.propTypes = {
  taskValue: PropTypes.string,
  onChangeTask: PropTypes.func.isRequired,
  onClickAddBtn: PropTypes.func.isRequired,
};

export default function AddTask(props) {
  const { taskValue, onChangeTask, onClickAddBtn } = props;

  return (
    <>
      <div className="app__input--area">
        <div className="app__input--title">Add Task</div>
        <div className="app__input--container">
          <input
            value={taskValue}
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
