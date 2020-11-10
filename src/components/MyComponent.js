import React, { Component, useState, useEffect } from 'react';

const MyComponent = () => {
    const [tasks, setTasks] = useState([]);

    useEffect( () => {
        const fetchDataAsync = async () => {
            const rawResponse = await fetch("https://jsonplaceholder.typicode.com/todos");
            const myTasks = await rawResponse.json();
            console.log(myTasks)
            setTasks(myTasks);
        }

        fetchDataAsync();

    }, [])

    const toggleStatus = (task) => {
        const myTasks = tasks.map((taskItem) => {
            if(taskItem.id === task.id){
                taskItem.completed = !task.completed
            }
            return taskItem;
        })

        setTasks(myTasks);     
    }

    return (<div>
        <h1>Hello World</h1>

        {
            tasks.map((t) => {
                return(<div key={t.id + "_wrapper"}>
                    <p>{t.title}</p>
                    <p> status: {(t.completed).toString()}</p>
                    <button onClick={() => toggleStatus(t)}>toggle status</button>
                    </div>)
            })
        }
    </div>)

}

export default MyComponent;