import { useEffect, useState } from 'react';

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
                const response = await fetch('http://localhost:8787/todo');
                const data = await response.json();
                setData(data);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [data]);

    return ({ data, loading, error });
}
