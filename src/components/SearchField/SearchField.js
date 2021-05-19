import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import { TextField } from "@material-ui/core";

import "./SearchField.css"



export default function SearchField({ value, onChangeText }) {


    return (
        <div className="search-filed-container">
            <div>
                <SearchIcon/>
            </div>
            <TextField
                id="standard-full-width"
                style={{ margin: 8 }}
                placeholder="Search..."
                fullWidth
                // margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                value={value}
                onChange={e => onChangeText(e.target.value)}
            />
        </div>
    )
}
