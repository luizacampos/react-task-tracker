import Task from "./Task";

function Tasks({ tasks, onDelete, onToggle }) {
    console.log(tasks);
    return (
        <div>
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onToggle={onToggle}
                />
            ))}
        </div>
    );
}

export default Tasks;
