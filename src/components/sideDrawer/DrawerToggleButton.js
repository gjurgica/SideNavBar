import React from 'react';
import './DrawerToggleButton.css';

const DrawerToggleButton = props => (
    <button className="toggle_btn" onClick={props.drawerToggle}>
        <div className="toggle_btn_line"/>
        <div className="toggle_btn_line"/>
        <div className="toggle_btn_line"/>
    </button>
)

export default DrawerToggleButton;