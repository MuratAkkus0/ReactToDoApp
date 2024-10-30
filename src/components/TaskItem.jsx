import { BiSolidEditAlt } from "react-icons/bi";
import { RiDeleteBin2Fill } from "react-icons/ri";

function TaskItem(props) {
  const { taskText, onClickDelBtn } = props;

  return (
    <>
      <li className="app__list--task">
        <span className="task">{taskText}</span>
        <div className="task__control--container">
          <button id="editBtn" className="task__control">
            <BiSolidEditAlt />
          </button>
          <button onClick={onClickDelBtn} id="delBtn" className="task__control">
            <RiDeleteBin2Fill />
          </button>
        </div>
      </li>
    </>
  );
}

export default TaskItem;
