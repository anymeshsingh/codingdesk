import React, { Component } from 'react';
import './WindowLayout.scss';

export class WindowLayout extends Component {

    constructor(){
        super();
        this.state = {
            dragPosition:{ pos1: 0, pos2: 0, pos3: 0, pos4: 0 },
            windowState: {
                key: '',
                isVisible: false,
                dragable: false,
                onTop: false,
                maximized: false
            }
        }
        this.windowRef = React.createRef();
        this.titleBarRef = React.createRef();
    }

    componentDidMount(){
        // console.log(this.props)
        this.setState({
            ...this.state,
            windowState:{
                ...this.state.windowState,
                ...this.props.windowState,
                key: this.props.component.key,
                dragable: ((this.props.component.key === "codeEditor") ? "false" : "true"),
            }
        });
        this.titleBarRef.current.onmousedown = this.dragMouseDown;
    }


    handleMaximize = () => {
        this.setState({...this.state, windowState: {...this.state.windowState, dragable: (this.state.windowState.maximized ? true : false),  maximized: !this.state.windowState.maximized } })
    }

    onFocus = () => {
        this.setState({...this.state, windowState: {...this.state.windowState,onTop: true}});
    }
    onBlur = () => {
        this.setState({...this.state, windowState: {...this.state.windowState,onTop: false}});
    }

  render() {
    return (
        <div className={"window" + (this.state.windowState.maximized ? " full-screen" : '') +(this.state.windowState.onTop ? " onTop" : '')} onMouseDown={this.onFocus} onMouseUp={this.onBlur} ref={this.windowRef}>
            <div className="title-bar" ref={this.titleBarRef}>
                <span className="close-btn" onClick={this.handleClose}></span>
                <span className="minimize" onClick={this.handleMinimize}></span>
                <span className="maximize" onClick={this.handleMaximize}></span>
            </div>
            <div className="window-body">{this.props.component}</div>
        </div>
    )
  }

    dragMouseDown = (e) => {
        e.preventDefault()
        if(this.state.windowState.dragable){
            // get the mouse cursor position at startup:
            this.setState({dragPosition:{pos3 : e.clientX}})
            this.setState({dragPosition:{pos4 : e.clientY}})
            document.onmouseup = this.closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = this.elementDrag;
        }
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
            this.windowRef.current.style.top = (this.windowRef.current.offsetTop - (this.state.dragPosition.pos2)) + "px";
            this.windowRef.current.style.left = (this.windowRef.current.offsetLeft - (this.state.dragPosition.pos1)) + "px";
        })
    }
    closeDragElement = () => {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }

}

export default WindowLayout
