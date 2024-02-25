import { useState } from "react";
import usePostData from "./PostData";

export default function InputTask() {
    const [task, setTask] = useState<string>("");
    const { postData } = usePostData(""); // Ensure usePostData returns an object with a postData property

    function postTask() {
        postData(task);
    }

    return (
        <div>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
            <button onClick={postTask}>Add task</button>
        </div>
  );
}
