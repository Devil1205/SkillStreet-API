import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Navbar({ message, updateMessage }) {

    const navigate = useNavigate();

    const [menuVisible, setMenuVisible] = useState(false);

    const slidingMenu = () => {
        let menu = document.querySelector('.slidingMenu');
        if (menuVisible === false) {
            menu.style.transform = `translatex(-250px)`;
            setMenuVisible(true);
        }
        else {
            menu.style.transform = `translatex(250px)`;
            setMenuVisible(false);
        }
    }

    const location = useLocation().pathname;

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, [location])

    return (
        <nav className="navbar navbar-expand-sm navbar-dark" >
            <div className='message'>
                {message && <div className={`alert alert-${message.type === 'success' ? message.type : "danger"}`} role='alert'>{`${message.type} : ${message.message}`}</div>}
            </div>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">PSMS</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto ">
                        <li className="nav-item">
                            <Link className={`nav-link ${location === '/' ? 'bold' : ""} "text-white" }`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location === '/players' ? 'bold' : ""} "text-white" }`} to="/players">All Players</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location === '/players/add' ? 'bold' : ""} "text-white" }`} to="/players/add">Add Player</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location === '/players/rank' ? 'bold' : ""} "text-white" }`} to="/players/rank">Search Rank</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='w-100 d-flex justify-content-end' style={{ position: "absolute", padding: "0px 10px" }}>
                <button className="navbar-toggler" type="button" onClick={slidingMenu} style={{ filter: "invert(0)" }} >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="slidingMenu text-center boxShadow slidingMenu-dark" style={{ borderRadius: "0px" }}>
                    <button className="navbar-toggler" type="button" onClick={slidingMenu} style={{ position: "relative", border: "none", right: "-40%", top: "5px", filter: "invert(0)", zIndex: "2" }}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link className="navbar-brand custom-Brand primary-font d-block m-0 py-2" to="/" onClick={() => { slidingMenu() }} style={{ position: "relative", top: "-10px", width: "fit-content", left: "31%" }}> Quotify </Link>
                    <hr className="border border-white border-1 opacity-100 m-0" />
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location === '/' ? 'bold' : ""} "text-white" }`} aria-current="page" to="/" onClick={slidingMenu}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location === '/players' ? 'bold' : ""} "text-white" }`} to="/players" onClick={slidingMenu}>All Players</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location === '/players/add' ? 'bold' : ""} "text-white" }`} to="/players/add" onClick={slidingMenu}>Add Player</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location === '/players/rank' ? 'bold' : ""} "text-white" }`} to="/players/rank" onClick={slidingMenu}>Search Rank</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    )
}

export default Navbar