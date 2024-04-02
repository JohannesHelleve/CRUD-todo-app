

export async function deleteTask(id: number) {
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({id: id}),
    };

    const res = await fetch('http://localhost:8787/todo', options)
    console.log(res.status)
    const message = await res.text()
    console.log(message)
}