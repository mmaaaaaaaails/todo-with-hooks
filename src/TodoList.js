import React from 'react';
import {Checkbox, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const TodoList = ({todos, deleteTodo}) => {

    return (
        <List>
            {todos.map((todo, index) => (<ListItem key={index.toString()} dense button>
                <Checkbox tabIndex={-1} disableRipple/>
                <ListItemText primary={todo}/>
                <ListItemSecondaryAction>
                    <IconButton
                        aria-label="Delete"
                        onClick={() => deleteTodo(index)}
                    >
                        <CloseIcon/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>))}
        </List>
    )
}



export default TodoList;
