import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import '../AddPlayer/AddPlayer.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function SearchRank({ base_URL, updateMessage }) {

    const [rankError, setRankError] = useState({ error: false, text: "" });
    const [player, setPlayer] = useState({});

    const search = async (e) => {
        e.preventDefault();

        if (!Number.isInteger(Number(e.target.rank.value)) || Number(e.target.rank.value) < 1) {
            e.target.rank.focus();
            setRankError({ error: true, text: "Rank must be a natural number" });
            return;
        }
        setRankError({ error: false, text: "" });

        try {
            const rank = e.target.rank.value
            e.target.reset();
            const data = await fetch(base_URL + "/players/rank/" + rank);
            console.log(data);
            const dataJson = await data.json();
            if (dataJson.success)
                setPlayer(dataJson.message);
            else
            {
                setPlayer({});
                updateMessage("error", "No Player Found");
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <div className='newPlayer'>
            <div className='container'>
                <Box component="form" id='playerForm' method='POST' onSubmit={(e) => { search(e) }}>
                    <div style={{ borderRadius: "20px" }}>
                        <TextField
                            required
                            id="rank"
                            label="Player Rank"
                            defaultValue=""
                            margin='normal'
                            fullWidth
                            sx={{
                                input: {
                                    color: 'white',
                                    backgroundColor: '#cfcfcf21',
                                    borderRadius: "5px"
                                },
                                label: { color: '#ffffff70' }
                            }}
                            error={rankError.error}
                            helperText={rankError.text}
                        />
                    </div>
                    <Button variant="contained" color="success" className='my-2' type='submit'>
                        Search
                    </Button>
                </Box>
                <div className="container">
                    <div className='randomPlayer'>
                        <div>Name : <span>❛❛</span>{player.name}<span>❜❜</span></div>
                        <div>Country : {player.country}</div>
                        <div>Score : {player.score}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchRank