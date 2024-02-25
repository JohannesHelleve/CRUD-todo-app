
interface TaskProps {
    task: string;
}

const Task = ({task}: TaskProps) => {
    return (
        <div className="bg-slate-500 ">
            {task}
        </div>
    )
}

export default Task;