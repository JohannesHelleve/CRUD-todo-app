
interface TaskProps {
    task: string;
}

const Task = ({task}: TaskProps) => {
    return (
        <div className="flex justify-center mb-4">
            <div className="bg-slate-600 w-6/12 flex rounded-lg ">
                <div className="">
                    {task}
                </div>
                <div>
                    <button className="bg-red-500">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Task;