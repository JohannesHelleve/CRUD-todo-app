import { useEffect } from 'react';

function usePostData(task: string){
    
    useEffect(() => {

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ task: task }),
        };

        fetch('http://localhost:8787/todo', options)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));

    }
    , []);

    return (console.log('Task added!'));
}

export default usePostData;
