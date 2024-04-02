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

        const fetchData = async () => {
            const res = await fetch('http://localhost:8787/todo', options)
            console.log(res.status)
            const data = await res.json()
            console.log(data)
        };

        void fetchData();

    }
    , []);

    return (console.log('Task added!'));
}

export default usePostData;
