import React, { Component } from 'react'

export class Browser extends Component {

    constructor(){
        super();
        this.browserRef = React.createRef();
        this.state = { html: '', css: '', js: '' }
    }

    componentDidMount(){
        this.setState({...this.props.currentState}, ()=>{
            this.reloadBrowser(this.state.html, this.state.css, this.state.js);
        })
    }
    componentDidUpdate(previousProps){
        if (JSON.stringify(previousProps.currentState) !== JSON.stringify(this.props.currentState)) {
            this.setState({ ...this.state, ...this.props.currentState}, ()=>{
                this.reloadBrowser(this.state.html, this.state.css, this.state.js);
            })
        }
    }

    reloadBrowser(html, css, js){
        const brower = this.browserRef.current.contentWindow.document
        brower.open();
        brower.writeln(
            `
            <html>
                <head>
                    <style>
                        body{margin:0;}
                        ${css}
                    </style>
                </head>
                <body>${html}</body>
                <script>${js}</script>
            </html>
            `
        );
        brower.close();
    }

  render() {
    return (
      <iframe title="This is a unique title"  className="browser" ref={this.browserRef}></iframe>
    )
  }
}

export default Browser
