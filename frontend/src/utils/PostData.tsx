import { useEffect } from 'react';
import { supabase } from '../../../backend/src/index';

function usePostData(task: string){
    
    useEffect(() => {

        const fetchData = async () => {
            const res = await supabase
                .from('todo')
                .insert([{ task: task }])
            console.log(res.status)
        };

        void fetchData();

    }
    , []);

    return (console.log('Task added!'));
}

export default usePostData;
