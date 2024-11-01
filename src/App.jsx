import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import TaskItem from "./components/TaskItem";
import { DiCelluloid } from "react-icons/di";

function App() {
  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  useEffect(() => {
    getItemsFromLS();
  }, []);

  const setItemsToLS = () => {
    localStorage.setItem("tasks", JSON.stringify(taskList) ?? []);
  };

  const getItemsFromLS = () => {
    let items = JSON.parse(localStorage.getItem("tasks"));
    setTaskList(items ?? []);
  };
  const delItemFromLS = (index) => {
    const updatedTaskList = taskList.filter((_, i) => i !== index);
    setTaskList(updatedTaskList);
  };

  useEffect(() => {
    setItemsToLS();
  }, [taskList]);

  const onClickAddBtn = () => {
    // let newTaskList = taskList; // Bu kodda tasklist dogrudan esitlenip degistiriliyor. bu boyle olursa react degisikligi algilamaz.
    if (!newTask) return;
    let newTaskList = [...taskList, newTask];
    setTaskList(newTaskList);
    setNewTask("");
  };

  const onClickDelBtn = (e) => {
    let childIndex = getCurrentElementId(e);
    delItemFromLS(childIndex);
  };

  const onChangeTask = (e, value) => {
    let index = getCurrentElementId(e);
    let newTaskList = [...taskList];
    newTaskList.splice(index, 1, value);
    setTaskList(newTaskList);
  };

  const getCurrentElementId = (e) => {
    let currentLiElement = e.target.closest(".app__list--task");
    let parentOfLiElement = currentLiElement.parentElement;
    let childrenArray = Array.from(parentOfLiElement.children);
    let childIndex = childrenArray.indexOf(currentLiElement);
    return childIndex;
  };

  return (
    <>
      <div className="app__title">To Do List</div>
      <AddTask
        taskValue={newTask}
        onChangeTask={(e) => setNewTask(e.target.value)}
        onClickAddBtn={onClickAddBtn}
      />

      {taskList.length ? (
        <TaskList>
          {taskList.map((item, index) => (
            <TaskItem
              key={index}
              taskText={item}
              onClickDelBtn={onClickDelBtn}
              onChangeTask={onChangeTask}
            />
          ))}
        </TaskList>
      ) : (
        <div id="allTasksComplated">All tasks completed</div>
      )}
    </>
  );
}

export default App;
