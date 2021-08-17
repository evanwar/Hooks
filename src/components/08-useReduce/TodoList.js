import React from 'react'
import TodoItem from './TodoItem';

const TodoList = ({ todos, handleToggle, handleDelete, }) => {
    return (
        <>
            <ul className="list-group list-group-flush">
                {
                    todos.map((todo, i) => {
                        return <TodoItem
                            key={i}
                            todo={todo}
                            index={i}
                            handleToggle={handleToggle}
                            handleDelete={handleDelete} />
                    })
                }
            </ul>
        </>
    )
}

export default TodoList;
