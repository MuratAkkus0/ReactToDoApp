import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import TaskItem from "./components/TaskItem";

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
    taskList.splice(index, 1);
    setTaskList([...taskList]);
    setItemsToLS();
  };

  useEffect(() => {
    setItemsToLS();
  }, [taskList]);

  const onClickAddBtn = () => {
    // let newTaskList = taskList; // Bu kodda tasklist dogrudan esitlenip degistiriliyor. bu boyle olursa react degisikligi algilamaz.
    let newTaskList = [...taskList, newTask];
    setTaskList(newTaskList);
    // setNewTask(""); // neden calismiyor bilmiyorum
  };

  const onClickDelBtn = (e) => {
    // debugger;
    let currentLiElement = e.target.closest(".app__list--task");
    let parentOfLiElement = currentLiElement.parentElement;
    let childrenArray = Array.from(parentOfLiElement.children);
    let childIndex = childrenArray.indexOf(currentLiElement);
    delItemFromLS(childIndex);
    // currentLiElement.remove();
  };

  return (
    <>
      <div className="app__title">To Do List</div>
      <AddTask
        taskValue={newTask}
        onChangeTask={(e) => setNewTask(e.target.value)}
        onClickAddBtn={onClickAddBtn}
      />
      <TaskList>
        {taskList.map((item, index) => (
          <TaskItem key={index} taskText={item} onClickDelBtn={onClickDelBtn} />
        ))}
      </TaskList>
    </>
  );
}

export default App;
