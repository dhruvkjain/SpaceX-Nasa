import { useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {

    useEffect(() => {
        const elements = document.getElementsByClassName('navlinks');
        [...elements].forEach(ele => {
            ele.addEventListener('click', () => {
                [...elements].forEach(ele2 =>{
                    ele2.classList.remove('navlinks-active');
                })
                ele.classList.add('navlinks-active');
            })
        });
    }, [])

    return (
        <div className="flex justify-center items-center">
            <nav className="navbar">
                <div className="flex text-[#555555] uppercase font-bold translate-y-[-110%] w-[100%] justify-around">
                    <Link to="/">
                        <div className="flex navlinks navlinks-active items-center">
                            <svg className="mr-1" xmlns="http://www.w3.org/2000/svg"
                                width="26" height="26" viewBox="0 0 24 24">
                                <g fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                                </g>
                            </svg>
                            <p className="">Home</p>
                        </div>
                    </Link>
                    <Link to="/launch">
                        <div className="flex navlinks items-center">
                            <i className="material-icons">check_circle_outline</i>
                            <p className="">Launch</p>
                        </div>
                    </Link>
                    <Link to="/upcoming">
                        <div className="flex navlinks items-center">
                            <i className="material-icons">update</i>
                            <p className="">Upcoming</p>
                        </div>
                    </Link>
                    <Link to="/history">
                        <div className="flex navlinks items-center">
                            <i className="material-icons">history</i>
                            <p className="">History</p>
                        </div>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Header
