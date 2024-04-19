import { deleteTask } from "../utils/DeleteData";
import { XMarkIcon } from '@heroicons/react/24/solid'

interface TaskProps {
    id: number;
    task: string;
}

const Task = ({id, task}: TaskProps) => {
    
    const handleDelete = async () => {
        deleteTask(id);
    };

    return (
            <div className="w-2/6 mx-auto bg-purple-300 mt-4 rounded-md flex justify-between items-center">
                <div className="text-black ml-2 text-xl">
                    {task}
                </div>
                <div className="mr-2">
                    <button onClick={handleDelete} className=""><XMarkIcon className="mt-1 h-6 w-6 text-black" /></button>
                </div>
            </div>
    )
}

export default Task;