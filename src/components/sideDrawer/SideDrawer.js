import React from 'react';
import Particles from 'react-particles-js';
import './SideDrawer.css';

const SideDrawer = props => {
    let drawerClasses = "side_drawer"
    if(props.show){
        drawerClasses = "side_drawer open"
    }
    return(
    <nav className={drawerClasses}>
        <Particles className="particles" params={props.particleOptions}/>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Contact</a></li>
        </ul>
    </nav>
)
}

export default SideDrawer;