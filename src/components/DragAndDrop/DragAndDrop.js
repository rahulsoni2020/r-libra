import { DRAG_AND_DROP } from "./DragAndDrop.constant";
import "./DragAndDrop.css";
import {useState} from 'react';
const DragAndDrop = ()=>{
    const initialItems = Array.from({ length: 5 }, (_, i) => ({id:i+1, name:`item${i+1}`, status: DRAG_AND_DROP.STATUS.TODO}));
    const [taskList, setTaskList] = useState(initialItems);
    const [completedTaskList, setCompletedTaskList] = useState([]);
    const [dragTask, setDragTask] = useState(null);

    const dragStart = (index) => {
        setDragTask(index);
    };

    const drop = (containerToDrop) => {
        if (!dragTask || dragTask.status === containerToDrop) {
            return;
        }
    
        const updatedTasks = [...taskList];
        const updatedCompletedTasks = [...completedTaskList];
    
        if (dragTask.status === DRAG_AND_DROP.STATUS.TODO && containerToDrop === DRAG_AND_DROP.STATUS.COMPLETED) {
            const index = updatedTasks.findIndex(task => task.id === dragTask.id);
            if (index !== -1) {
                const [movedTask] = updatedTasks.splice(index, 1);
                updatedCompletedTasks.push({ ...movedTask, status: DRAG_AND_DROP.STATUS.COMPLETED });
            }
        } 
        else if (dragTask.status === DRAG_AND_DROP.STATUS.COMPLETED && containerToDrop === DRAG_AND_DROP.STATUS.TODO) {
            const index = updatedCompletedTasks.findIndex(task => task.id === dragTask.id);
            if (index !== -1) {
                const [movedTask] = updatedCompletedTasks.splice(index, 1);
                updatedTasks.push({ ...movedTask, status: DRAG_AND_DROP.STATUS.TODO });
            }
        }
    
        setDragTask(null);
        setTaskList(updatedTasks);
        setCompletedTaskList(updatedCompletedTasks);
    };
    

    return (
        <div className="container">
            <div className="list-container drag" 
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={() => drop(DRAG_AND_DROP.STATUS.TODO)}
                        >
                {taskList.map((task, index) => (
                    <div
                        key={task?.id}
                        className="list-item"
                        draggable
                        onDragStart={() => dragStart(task)}
                    >
                        {task.name}
                    </div>
                ))}
            </div>
            <div className="list-container drop"
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => drop(DRAG_AND_DROP.STATUS.COMPLETED)}
            >
            {completedTaskList.map((task, index) => (
                    <div
                        key={task.id}
                        className="list-item"
                        draggable
                        onDragStart={() => dragStart(task)}
                    >
                        {task.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DragAndDrop;