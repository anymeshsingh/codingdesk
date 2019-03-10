import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Browser extends Component {

    constructor(){
        super();
        this.browserRef = React.createRef();
        this.state = { html: {}, css: {}, js: {} }
    }

    componentDidMount(){
        this.setState({...this.props.projectState}, ()=>{
            this.reloadBrowser(this.state.html.content, this.state.css.content, this.state.js.content);
        })
    }
    componentDidUpdate(previousProps){
        if (JSON.stringify(previousProps.projectState) !== JSON.stringify(this.props.projectState)) {
            this.setState({ ...this.state, ...this.props.projectState}, ()=>{
                this.reloadBrowser(this.state.html.content, this.state.css.content, this.state.js.content);
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

const mapStateToProps = (state) => {
    return {
        projectState: state.projectState
    }
}

export default connect(mapStateToProps)(Browser);