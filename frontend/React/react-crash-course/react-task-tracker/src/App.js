import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
    const [showAddTask, setShowAddTask] = useState(false);

    // Data
    const [tasks, setTasks] = useState([
        {
            text: "Food Shopping",
            id: 1,
            day: "Feb 5th at 2:30pm",
            reminder: true,
        },
        {
            text: "Doctor's Appointment",
            id: 2,
            day: "Feb 6th at 4:30pm",
            reminder: false,
        },
        {
            text: "Study and practice",
            id: 3,
            day: "Feb 7th at 8 am",
            reminder: true,
        },
    ]);

    // Add Task
    const addTask = (task) => {
        // console.log(task);
        const id = Math.floor(Math.random() * 10000) + 1;
        const newTask = { id, ...task };
        setTasks([...tasks, newTask]);
    };

    // Delete task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    //Toggle Reminder
    const toggleReminder = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, reminder: !task.reminder } : task
            )
        );
    };

    return (
        <div className="container">
            <Header
                onAdd={() => setShowAddTask(!showAddTask)}
                showAdd={showAddTask}
            />
            {showAddTask && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ? (
                <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                />
            ) : (
                "No Tasks to show"
            )}
        </div>
    );
}

export default App;
