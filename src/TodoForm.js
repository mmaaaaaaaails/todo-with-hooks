import React from 'react';
import {TextField} from "@mui/material";
import useInputState from "./useInputState";

const TodoForm = ({saveTodo}) => {

    const {value, onChange, reset} = useInputState('');

    const onSubmitForm = (event) => {
        event.preventDefault();
        saveTodo(value);
        reset();
    }

    return (
        <div>
            <form
                onSubmit={onSubmitForm}
            >
                <TextField
                    variant="outlined"
                    placeholder="Add todo"
                    margin="normal"
                    onChange={onChange}
                    value={value}
                />
            </form>
        </div>
    );
};

export default TodoForm;
