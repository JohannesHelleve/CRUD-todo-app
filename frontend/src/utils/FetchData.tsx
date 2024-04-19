import { useEffect, useState } from 'react';
import { supabase } from '../../../backend/src/index';

interface Data {
    id: number;
    task: string;
}

export default function useFetchData() {
    
    const [data, setData] = useState<Data[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);  

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data, error } = await supabase
                    .from('todo')
                    .select('*')
                if (error) {
                    setError(true);
                    return;
                }
                setData(data);
                setLoading(false);
            } catch (error) {
                setError(true);
            }
        };
        fetchData();
    }, [data]);

    return ({ data, loading, error });
}
