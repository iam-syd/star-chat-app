import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import NextIcon from '@mui/icons-material/NavigateNext';
import './InfoDialog.css'

const InfoDialog = () => {
    const [username, setUsername] = useState("");
    const [checkboxVal, setCheckboxVal] = useState('off');
    const [showInfoDialog, setShowInfoDialog] = useState(true)

    const usernameHandler = (name) => {
        setUsername(name.target.value)
    }

    const checkboxHandler = (check) => {
        setCheckboxVal(check.target.value)
    }

    const label = {
        inputProps: { 'aria-label': 'Checkbox demo' }
    };

    const letsGoBtnHandler = () => {
        console.log('Important works needs to be done ❕')
    }

    return (
        (showInfoDialog &&
            <section className='infodialog__mainDiv' >
                <TextField
                    className="infodialog__textfield"
                    id="outlined-textarea"
                    label="Enter a Unique Username:"
                    placeholder="e.g iamAjay or ajay69"
                    multiline
                    size="1em"
                    onChange={usernameHandler}
                    value={username}

                />

                <div className="infodialog__ageRestriction">
                    <Checkbox {...label}
                        color="error"
                        onChange={checkboxHandler}
                    />
                    <label>*I certify that I am at least 18 years old and that I agree to the Terms and Policies and Privacy Policy.</label>
                </div>

                <Button
                    size="small"
                    className="infodialog__submitBtn shineEff"
                    variant="contained"
                    onClick={letsGoBtnHandler}
                >
                    &nbsp; LET's GO <NextIcon />
                </Button>

            </section>)
    )
} // main InfoDialog func 

export default InfoDialog;