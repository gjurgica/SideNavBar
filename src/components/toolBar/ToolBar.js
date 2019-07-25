import React from 'react';
import DrawerToggleButton from '../sideDrawer/DrawerToggleButton';
import './ToolBar.css'

const ToolBar = props => (
    <header className="toolbar">
        <nav className="toolbar_nav">
            <div>
                <DrawerToggleButton drawerToggle={props.drawerToggle}/>
            </div>
            <div className="toolbar_logo"><a href="/">Logo</a></div>
            <div className="spacer"/>
            <div className="toolbar_nav_items">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>

)

export default ToolBar;