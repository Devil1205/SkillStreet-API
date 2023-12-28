import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import './AddPlayer.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function AddPlayer({ base_URL, updateMessage }) {

    const [nameError, setNameError] = useState({ error: false, text: "" });
    const [countryError, setCountryError] = useState({ error: false, text: "" });
    const [scoreError, setScoreError] = useState({ error: false, text: "" });

    const savePlayer = async (e) => {
        e.preventDefault();
        // console.log(e);
        if (e.target.name.value.length > 15) {
            e.target.name.focus();
            setNameError({ error: true, text: "Name cannot exceed 15 characters" });
            return;
        }
        setNameError({ error: false, text: "" });
        if (e.target.country.value.length !== 2) {
            e.target.country.focus();
            setCountryError({ error: true, text: "Country must be only 2 characters" });
            return;
        }
        setCountryError({ error: false, text: "" });
        if (!Number.isInteger(Number(e.target.score.value))) {
            e.target.score.focus();
            setScoreError({ error: true, text: "Score must be an integer" });
            return;
        }
        setScoreError({ error: false, text: "" });

        try {
            const data = JSON.stringify({
                name: e.target.name.value,
                country: e.target.country.value,
                score: e.target.score.value
            });
            e.target.reset();
            const save = await fetch(base_URL + "/players", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: data,
            })
            const saveJson = await save.json();
            if (saveJson.success)
                updateMessage("success", "Player added successfully");
            else
                updateMessage("error", "Couldn't add this player");
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <div className='newPlayer'>
            <div className='container'>
                <Box component="form" id='playerForm' method='POST' onSubmit={(e) => { savePlayer(e) }}>
                    <div style={{ background: "#cfcfcf21", padding: "10px", borderRadius: "20px" }}>
                        <TextField
                            required
                            id="name"
                            label="Player Name"
                            defaultValue=""
                            margin='normal'
                            fullWidth
                            sx={{
                                input: {
                                    color: 'white',
                                },
                                label: { color: '#ffffff70' }
                            }}
                            error={nameError.error}
                            helperText={nameError.text}
                        />
                        <TextField
                            required
                            id="country"
                            label="Country"
                            defaultValue=""
                            margin='normal'
                            fullWidth
                            sx={{
                                input: {
                                    color: 'white',
                                },
                                label: { color: '#ffffff70' }
                            }}
                            error={countryError.error}
                            helperText={countryError.text}
                        />
                        <TextField
                            required
                            id="score"
                            label="Score"
                            defaultValue=""
                            margin='normal'
                            fullWidth
                            sx={{
                                input: {
                                    color: 'white',
                                },
                                label: { color: '#ffffff70' }
                            }}
                            error={scoreError.error}
                            helperText={scoreError.text}
                        />
                    </div>
                    <Button variant="contained" color="success" className='my-2' type='submit'>
                        Submit
                    </Button>
                </Box>
            </div>
        </div>
    )
}

export default AddPlayer