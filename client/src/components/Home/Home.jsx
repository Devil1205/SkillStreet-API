import React, { useEffect, useState } from 'react';
import './Home.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Home({ base_URL }) {

    const [player, setPlayer] = useState({});

    const getRandomPlayer = async () => {
        const data = await fetch(base_URL + "/players/random", {
            method: "GET",
        });
        const dataJson = await data.json();
        setPlayer(dataJson.message);
        // console.log(dataJson);
    }

    useEffect(() => {
        getRandomPlayer();
    }, [])


    return (
        <div className="home">
            <div>
                <div className='randomPlayer'>
                    <div>Name : <span>❛❛</span>{player&&player.name}<span>❜❜</span></div>
                    <div>Country : {player&&player.country}</div>
                    <div>Score : {player&&player.score}</div>
                </div>
                <div className="playerButtons text-center">
                    <Button className='me-2 my-2' variant="contained" color="success" onClick={getRandomPlayer} style={{ borderRadius: "50px" }}>
                        Another Player
                    </Button>
                    <Link to="/players">
                        <Button variant="contained" className='me-2 my-2' color="primary" style={{ borderRadius: "50px" }}>
                            All Players
                        </Button>
                    </Link>
                    <Link to="/players/add">
                        <Button variant="contained" className='me-2 my-2' color="warning" style={{ borderRadius: "50px" }}>
                            Add Player
                        </Button>
                    </Link>
                    <Link to="/players/rank">
                        <Button variant="contained" className='my-2' color="error" style={{ borderRadius: "50px" }}>
                            Search Rank
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home