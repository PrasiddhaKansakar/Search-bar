import React from "react";
import data from "./Inputs.json";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

function Input(props){

    const filteredData = data.filter((elem) => {
        if (props.input===""){
            return elem;
        }
        else{
            return elem.text.toLowerCase().includes(props.input);
        }
    })

    return (
        <List>
            {filteredData.map((item)=>(<ListItem key="item.id">{item.text}</ListItem>))}
        </List>
    )
}

export default Input;