import React, { Component } from 'react';
import './WindowLayout.scss';

export class WindowLayout extends Component {

    constructor(){
        super();
        this.state = {
            dragPosition:{ pos1: 0, pos2: 0, pos3: 0, pos4: 0 },
            key: '',
            windowState: {
                title: '',
                isVisible: false,
                dragable: false,
                onTop: false,
                maximized: false,
                minimized: false,
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
                dragable: ((this.props.component.key === "codeEditor") ? "false" : "true"),
            },
            key: this.props.component.key,
        });
        this.titleBarRef.current.onmousedown = this.dragMouseDown;
    }

    componentDidUpdate(previousProps){
        if(JSON.stringify(previousProps.windowState) !== JSON.stringify(this.props.windowState)){
            this.setState({
                ...this.state,
                windowState:{
                    ...this.state.windowState,
                    ...this.props.windowState,
                }
            });  
        }
    }

    handleClose = () => {
        this.props.close(this.state.key);
    }

    handleMinimize = () => {
        this.props.minimize(this.state.key);
    }

    handleMaximize = () => {
        this.props.maximize(this.state.key);
    }
    handleOnTop = () => {
        this.props.onTop(this.state.key);
    }

  render() {
    let minimizeClass = this.state.key === "htmlEditor" ? "minimize-htmlEditor" : (
                            this.state.key === "cssEditor" ? "minimize-cssEditor" : (
                                this.state.key === "jsEditor" ? "minimize-jsEditor" : (
                                    this.state.key === "browser" ? "minimize-browser" : (
                                        this.state.key === "codeEditor" ? "minimize-codeEditor" : null
                                    )
                                )
                            )
                        )
    return (
        <div className={"window " + (this.state.windowState.maximized ? " full-screen" : '') + (this.state.windowState.onTop ? " onTop " : '') + (this.state.windowState.minimized ? minimizeClass : '')} onMouseDown={this.handleOnTop} ref={this.windowRef}>
            <div className="title-bar" ref={this.titleBarRef}>
                <span className="close-btn" onClick={this.handleClose}></span>
                <span className="minimize" onClick={this.handleMinimize}></span>
                <span className="maximize" onClick={this.handleMaximize}></span>
                <span className="title">{this.state.windowState.title}</span>
            </div>
            <div className="window-body">{this.props.component}</div>
            <div onClick={this.handleMinimize} className={(this.state.windowState.minimized ? "overlay" : null)}>{
                this.state.key === "htmlEditor" ? "HTML Editor" : (
                    this.state.key === "cssEditor" ? "CSS Editor" : (
                        this.state.key === "jsEditor" ? "JS Editor" : (
                            this.state.key === "browser" ? "Browser" : (
                                this.state.key === "codeEditor" ? "Code Editor" : null
                            )
                        )
                    )
                )
            }</div>
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
