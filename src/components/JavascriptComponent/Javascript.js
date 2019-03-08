import React, { Component } from 'react'
import { tabToIndent } from '../../Utilities/util'

export class Html extends Component {
    constructor(){
        super();
        this.state = {
            wrap: 'off',
            content: ''
        }
    }
    componentDidMount(){
      this.setState({...this.state, content: this.props.content})
    }

    componentDidUpdate(previousProps){
      // console.log((previousProps.content !== this.props.content) && (this.state.content !== this.props.content))
      if((previousProps.content !== this.props.content) && (this.state.content !== this.props.content)){
        this.setState({...this.state, content: this.props.content})
      }

    }

    handleChange = (content) => {
      this.setState({ ...this.state, content }, ()=>{
        this.props.handleJsChange(this.state.content);
      })
    }

  render() {
    return (
      <textarea className="textarea" wrap={this.state.wrap} value={this.state.content} onChange={event => this.handleChange(event.target.value)} onKeyDown={tabToIndent}></textarea>
    )
  }
}

export default Html
