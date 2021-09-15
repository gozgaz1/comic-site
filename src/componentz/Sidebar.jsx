import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import { routes } from '../routes';
import { IoIosOptions } from 'react-icons/io';
import '../Styling/Sidebar.css';

export default function Sidebar() {
    // declare new state variable called "sidebar", set default value to 'false'
    const [ sidebar, setSidebar ] = useState(false);
    const [ activeOption, setOption ] = useState(-1); // set to -1 so no option is selected by default

    const showSidebar = () => {
        // this function handle the clicked state of menu burger
        setSidebar(!sidebar);
    };

    const closeSidebar = () => {
        // this function handle the clicked state of menu burger
        setSidebar(false);
    };

    const highlightOption = (option) => {
        // this function handle state of list item in nav
        // set the state to only have a current option selection which will unselect the previous selection
        setOption(option);
    }
    return (
        <>
            <div className="sidebar">
                <div>
                    <Link to="#" className={sidebar ? 'sidebar-options active' : 'sidebar-options'}>
                        <FaIcons.FaBars onClick={showSidebar}/> {/* this is the burger icon, we bind to this because it affects the main state*/}
                    </Link>
                </div>
                <nav className={sidebar ? 'sidebar-menu active' : 'sidebar-menu'}>
                    <ul className='sidebar-menu-items'>
                        {routes.map((item, index) => {
                            return (
                                <li 
                                    key={index} 
                                    onClick={() => highlightOption(index)}
                                    /* We can bind this funciton to 'null' as the context is not important here, bind to 'this' works too
                                        This allows:
                                        (1) if item's not avail, we don't show it being active at all
                                        (2) if item's available, we highlight, 
                                        (3) if item's also selected, we keep it active,
                                    */
                                    className={`sidebar-text${item.avail !== 'Y' ? ' inactive' : activeOption === index ? ' active' : ''}`}
                                >  
                                    <Link to={item.path} onClick={closeSidebar}>
                                        <span className='item-title'>{item.title}</span>
                                        <span className='item-icon'>{item.icon}</span>
                                    </Link>
                                </li>
                            )
                        })}
                        { /* Manually add 'dev' thing in here to actually help working */
                            window.location.pathname === '/devMenu' && 
                            <li 
                                key='devMenu' 
                                onClick={() => highlightOption(routes.length)}
                                className={`sidebar-text active`}
                            >  
                                <Link to='/devMenu'>
                                    <span className='item-title'>DEV</span>
                                    <span className='item-icon'><IoIosOptions/></span>
                                </Link>
                            </li>
                        }
                    </ul>
                </nav>
            </div>
        </>
    )
}
