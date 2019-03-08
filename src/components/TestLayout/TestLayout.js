import React, { Component } from 'react';
import './TestLayout.scss';
// import { dragElement } from '../../Utilities/util'

export class TestLayout extends Component {

    constructor(){
        super();
        this.divRef = React.createRef();
        this.handle = React.createRef();
        this.state = {
            dragPosition:{
                pos1: 0, 
                pos2: 0, 
                pos3: 0, 
                pos4: 0
            }
        }
    }
    componentDidMount(){
        this.handle.current.onmousedown = this.dragMouseDown;
    }

    dragMouseDown = (e) => {
        e.preventDefault()
        // get the mouse cursor position at startup:
        this.setState({dragPosition:{pos3 : e.clientX}})
        this.setState({dragPosition:{pos4 : e.clientY}})
        document.onmouseup = this.closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = this.elementDrag;
    }
    elementDrag = (e) => {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        this.setState({dragPosition:{
            pos1: (this.state.dragPosition.pos3 - e.clientX),
            pos2: (this.state.dragPosition.pos4 - e.clientY),
            pos3: e.clientX,
            pos4: e.clientY
        }}, ()=>{
            this.divRef.current.style.top = (this.divRef.current.offsetTop - this.state.dragPosition.pos2) + "px";
            this.divRef.current.style.left = (this.divRef.current.offsetLeft - this.state.dragPosition.pos1) + "px";
        })
      }
    closeDragElement = () => {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }

  render() {
    return (
      <div id="mydiv" style={{height: 300, width: 300, backgroundColor: '#333', color: 'white'}} ref={this.divRef}>
          <h1 id="mydivheader" style={{backgroundColor : 'lightgrey'}} ref={this.handle}>Handle</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusamus ut ea, sint mollitia dicta? Architecto, porro eos? Maiores totam est nam dicta recusandae sapiente distinctio autem tempore accusamus velit?</p>
        
      </div>
    )
  }
}

export default TestLayout
