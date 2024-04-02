import React from 'react';
import useFetchData from '../utils/FetchData';
import Task from './Task';

const TaskList: React.FC = () => {
    
    const { data, loading, error } = useFetchData();

    if (error) {
        return <div>There was an error</div>;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="w-full">
            {data.map((item) => (
                <Task id={item.id} task={item.task} />
            ))}
        </div>
    );
};

export default TaskList;