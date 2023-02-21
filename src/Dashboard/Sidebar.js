import React from 'react'

function Sidebar() {
    return (
        <div>
            <div className="sidebar" id="sidebar">
                <div className="sidebar-inner slimscroll">
                    <div id="sidebar-menu" className="sidebar-menu">
                        <ul>
                            <li className='active'>
                                <a href=''><img src="images/Home.png" alt="" /> <span>Home</span></a>
                            </li>
                            <li>
                                <a href=''> <img src="images/avtar-dashbord.png" alt="" /><span>My Avatar</span></a>
                            </li>
                            <li>
                                <a href=''><img src="images/world.png" alt="" /> <span>Discover worlds</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar