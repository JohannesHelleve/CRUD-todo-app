import React from 'react';
import { useState } from 'react';
import useFetchData from './FetchData';
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
        <div>
            {data.map((item) => (
                <Task key={item.id} task={item.task} />
            ))}
        </div>
    );
};

export default TaskList;