import React, { useEffect, useState } from 'react'
import './AllPlayers.css'
import '../Home/Home.css'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useNavigate } from 'react-router-dom';

function AllPlayers({ base_URL, updateMessage }) {

    const navigate = useNavigate();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
    const [players, setPlayers] = useState([]);
    const [page, setPage] = useState(1);
    const pageSize = 5;

    const getPlayers = async () => {
        const data = await fetch(base_URL + "/players");
        const dataJson = await data.json();
        // console.log(dataJson);
        setPlayers(dataJson.message);
    }

    const nextPage = () => {
        setPage(page + 1);
        scrollToTop();
    }

    const prevPage = () => {
        setPage(page - 1);
        scrollToTop();
    }

    const editPlayer = (e) => {
        // console.log(e);
        navigate('/players/update', {
            state: {
                player: e
            }
        })
    }

    const deletePlayer = async (e) => {
        try {
            const response = await fetch(base_URL + "/players/" + e._id, {
                method: "DELETE",
                headers: { "Content-type": "application/json" },
            })
            const responseJson = await response.json();

            if (responseJson.success) {
                updateMessage("success", "Player deleted successfully");
                getPlayers();
            }
            else {
                updateMessage("error", responseJson.message);
            }
            // console.log(response);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPlayers();
    }, [])

    return (
        <div className='allPlayers'>
            <div>
                {players.map((element, index) => {
                    return (
                        (index < page * pageSize && index >= (page - 1) * pageSize) && <div className='randomPlayer' key={index}>
                            <div>Name : <span>❛❛</span>{element.name}<span>❜❜</span></div>
                            <div>Country : {element.country}</div>
                            <div>Score : {element.score}</div>
                            <div className="icons">
                                <IconButton className='editIcon' aria-label="edit" onClick={() => { editPlayer(element) }}>
                                    <EditIcon color='secondary' sx={{ color: "#00ea39", fontSize: 30 }} />
                                </IconButton>
                                <IconButton className='deleteIcon' aria-label="delete" onClick={() => { deletePlayer(element) }}>
                                    <DeleteForeverIcon sx={{ color: "#fe8f58", fontSize: 30 }} />
                                </IconButton>
                            </div>
                        </div>
                    )
                })}
                <div className='text-center'>
                    <Button variant="contained" disabled={page === 1} onClick={prevPage} color="success" className='mx-2'>Prev</Button>
                    <Button variant="contained" disabled={page === Math.max(Math.ceil(players.length / pageSize), 1)} onClick={nextPage} color="success" className='mx-2'>Next</Button>
                </div>
            </div>
        </div>
    )
}

export default AllPlayers