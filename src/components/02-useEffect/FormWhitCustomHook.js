import React from 'react';
import useForm from '../../Hooks/useForm';
import './effects.css';


const FormWhitCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Enviado');
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Custom Hook</h1>
            <hr />

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Nombre.."
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange} />
            </div>

            <div className="form-group">
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email.."
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange} />
            </div>


            <div className="form-group">
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="***"
                    autoComplete="off"
                    value={password}
                    onChange={handleInputChange} />
            </div>

            <button
                type="submit"
                className="btn btn-primary">Eniar</button>

        </form>
    )
}

export default FormWhitCustomHook;
