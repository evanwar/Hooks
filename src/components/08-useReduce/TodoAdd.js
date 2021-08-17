import React from 'react';
import useForm from '../../Hooks/useForm';

const TodoAdd = ({ handleAddTodo }) => {



    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        console.log(newTodo);

        handleAddTodo({
            type: 'add',
            payload: newTodo
        });

        reset();

    }


    return (
        <>
            <h4>Agregar TODO</h4>
            <hr />

            <form onSubmit={handleSubmit}>
                <input
                    className="form-control"
                    type="text"
                    name="description"
                    placeholder="Aprender..."
                    autoComplete="off"
                    value={description}
                    onChange={handleInputChange}
                />

                <button
                    type="submit"
                    className="btn btn-outline-primary mt-3 btn-block">
                    Agregar
                </button>

            </form>
        </>
    )
}

export default TodoAdd;
