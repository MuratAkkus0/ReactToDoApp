import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { BiSolidEditAlt } from "react-icons/bi";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";

TaskItem.propTypes = {
  taskText: PropTypes.string.isRequired,
  onClickDelBtn: PropTypes.func.isRequired,
};

function TaskItem(props) {
  const { taskText, onClickDelBtn, onChangeTask } = props;
  const [showFullTask, setShowFullTask] = useState(false);
  const [maxChar, setMaxChar] = useState(50);
  const [editable, setEditable] = useState(false);
  const [updatedTaskText, setUpdatedTaskText] = useState(taskText);

  const getMaxChar = () => {
    let currentWidth = document.querySelector(".task").clientWidth;
    let charAmount = Math.floor((currentWidth * 9) / 100);
    setMaxChar(charAmount);
  };

  useEffect(() => {
    getMaxChar();
    window.addEventListener("resize", getMaxChar);
  }, []);

  const updateTask = (e) => {
    onChangeTask(e, updatedTaskText);
  };

  const displayedText =
    showFullTask || taskText.length <= maxChar
      ? taskText
      : `${taskText.substring(0, maxChar)}...`;

  return (
    <>
      <li className="app__list--task">
        {editable ? (
          <input
            value={updatedTaskText}
            onChange={(e) => setUpdatedTaskText(e.target.value)}
            type="text"
            id="editInput"
          />
        ) : (
          <span className="task">
            {displayedText}{" "}
            {taskText.length > maxChar && !editable && (
              <button
                onClick={() => setShowFullTask(!showFullTask)}
                id="showMoreLessBtn"
              >
                {showFullTask ? "less" : "more"}
              </button>
            )}
          </span>
        )}
        <div className="task__control--container">
          <button
            onClick={() => setEditable(!editable)}
            id="editBtn"
            className="task__control"
          >
            {editable ? <FaCheck onClick={updateTask} /> : <BiSolidEditAlt />}
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
