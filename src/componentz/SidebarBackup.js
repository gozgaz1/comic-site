import React from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import { routes } from '../routes';
import '../Styling/Sidebar.css';


/* Basically, i didn't have to maek Sidebar a class, i can just keep it as a function */

export default class Sidebar extends React.Component {
    // declare new state variable called "sidebar", set default value to 'false'
    constructor(props) {
        super(props);
        this.state = {
            sidebar: false,
            activeOption: -1,
        };
    }

    showSidebar = () => {
        // this function handle the clicked state of menu burger
        let activeSidebar = this.state.sidebar;
        this.setState({sidebar: !activeSidebar});
    };

    highlightOption = (option) => {
        // this function handle the individual state of list item in nav
        // set the state to only have a current option selection which will unselect the previous selection
        this.setState({ activeOption: option});
    }

    render() {
        return (
            <>
                <div className="sidebar">
                    <div>
                        <Link to="#" className={this.state.sidebar ? 'sidebar-options active' : 'sidebar-options'}>
                            <FaIcons.FaBars onClick={this.showSidebar.bind(this)}/> {/* this is the burger icon, we bind to this because it affects the main state*/}
                        </Link>
                    </div>
                    <nav className={this.state.sidebar ? 'sidebar-menu active' : 'sidebar-menu'}>
                        <ul className='sidebar-menu-items'>
                            {routes.map((item, index) => {
                                return (
                                    <li 
                                        key={index} 
                                        onClick={this.highlightOption.bind(null, index)}
                                        /* We can bind this funciton to 'null' as the context is not important here, bind to 'this' works too
                                           This allows:
                                            (1) if item's not avail, we don't show it being active at all
                                            (2) if item's available, we highlight, 
                                            (3) if item's also selected, we keep it active,
                                        */
                                        className={`sidebar-text${item.avail !== 'Y' ? ' inactive' : this.state.activeOption === index ? ' active' : ''}`}
                                    >  
                                        <Link to={item.path}>
                                            <span className='item-title'>{item.title}</span>
                                            <span className='item-icon'>{item.icon}</span>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </div>
            </>
        )
    }
}
