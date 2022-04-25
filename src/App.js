import {React,useState} from "react";
import Input from "./Components/Input";
import TextField from "@mui/material/TextField";

function App(){
    const [inputText, setInputText] = useState("");

    let inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    }

    return (
    <div>
        <TextField
          onChange={inputHandler}
          id="standard-search"
          label="Search field"
          type="search"
          variant="standard"/>
        <Input input={inputText}/>
    </div>
    )
}


export default App;