import { useState } from "react";

export default function InputTask() {
    const [task, setTask] = useState<string>("");



        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ task: task}),
        };

        const handleSubmit = async () => {
            const res = await fetch('http://localhost:8787/todo', options)
            console.log(res.status)
            const message = await res.text()
            console.log(message)
        };

    return (
        <div>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
            <button onClick={handleSubmit}>Add task</button>
        </div>
  );
}
