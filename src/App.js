import React,{Component} from 'react';
import Particles from 'react-particles-js';
import ToolBar from './components/toolBar/ToolBar';
import SideDrawer from './components/sideDrawer/SideDrawer';
import BackDrop from './components/backDrop/BackDrop';
import './App.css';

const particleOptions = {
  particles:{
    number:{
      value:100,
      density:{
        enable:true,
        value_area:800
      }
    }
  }
}

class App extends Component {
  state = {
    sideDrawerOpen: false
  }
  
  drawerToggle = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen:!prevState.sideDrawerOpen}
    })
  }
  backdropClick = () => {
    this.setState({sideDrawerOpen:false})
  }
  render(){
    let backDrop;
    if(this.state.sideDrawerOpen){
      backDrop = <BackDrop backdropClick={this.backdropClick}/>
    }
    return (
      <div style={{height:"100%"}}> 
        <ToolBar drawerToggle={this.drawerToggle}/> 
        <SideDrawer show={this.state.sideDrawerOpen} particaloptions={particleOptions}/>
        {backDrop}
        <main style={{
          marginTop:"64px"
        }}>
          <Particles className="particles" params={particleOptions}/>
        </main>
      </div>
    );
  }
}

export default App;
