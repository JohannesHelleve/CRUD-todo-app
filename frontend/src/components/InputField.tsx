import { useState } from "react";
import usePostData from "../utils/PostData";

export default function InputField() {
    const [task, setTask] = useState<string>("");

    const handleSubmit = async () => {
        if (!task.trim()) {
            alert('Task cannot be empty!');
            return;
        }

        if (task.length > 50) {
            alert('Max 40 characters allowed! Will soon be fixed!');
            return;
        }

        const data = task;
        console.log(usePostData(data));
        setTask("");
    };

    return (
        <div className="relative w-2/5 mt-10">
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Write your next To-Do here!" className="m-2 pl-2 ml-0 w-full  rounded-md h-5/6"/>
            <button onClick={handleSubmit} className="absolute top-2 right-1  bg-purple-300 rounded-md px-2 my-1">Add task</button>
        </div>
  );
}
